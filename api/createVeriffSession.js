import { request as httpRequest } from "http";
import { request as httpsRequest } from "https";
import { createHmac, randomUUID } from "crypto";

const DEFAULT_HOSTS = ["https://api-saas.veriff.com", "https://stationapi.veriff.com"];

function fail(status, body) {
  const error = new Error(body.message || "Veriff session request failed");
  error.status = status;
  error.body = body;
  return error;
}

function hosts() {
  const configured = process.env.VERIFF_BASE_URL?.replace(/\/$/, "");
  return [...new Set([configured, ...DEFAULT_HOSTS].filter(Boolean))];
}

function needsIntegrationId(data) {
  if (String(data.code) === "1803") return false;
  const message = `${data.message || ""}`;
  return /vrf-integration-id|integration id/i.test(message);
}

function requestJson(method, url, headers, body) {
  return new Promise((resolve, reject) => {
    const target = new URL(url);
    const transport = target.protocol === "http:" ? httpRequest : httpsRequest;
    const req = transport(
      {
        method,
        hostname: target.hostname,
        path: `${target.pathname}${target.search}`,
        headers: body
          ? { ...headers, "Content-Length": Buffer.byteLength(body) }
          : headers,
      },
      (res) => {
        const chunks = [];
        res.on("data", (chunk) => chunks.push(chunk));
        res.on("end", () => {
          const text = Buffer.concat(chunks).toString("utf8");
          let data;
          try {
            data = text ? JSON.parse(text) : {};
          } catch {
            data = { message: text.slice(0, 180) };
          }
          resolve({
            ok: res.statusCode >= 200 && res.statusCode < 300,
            status: res.statusCode || 0,
            data,
          });
        });
      }
    );
    req.on("error", reject);
    if (body) req.write(body);
    req.end();
  });
}

async function postSession(host, apiKey, integrationId) {
  const headers = {
    "Content-Type": "application/json",
    "X-AUTH-CLIENT": apiKey,
  };
  if (integrationId) headers["vrf-integration-id"] = integrationId;

  const body = JSON.stringify({
    verification: {
      vendorData: randomUUID(),
    },
  });
  return requestJson("POST", `${host}/v1/sessions`, headers, body);
}

export async function createVeriffSession() {
  const apiKey = process.env.VERIFF_API_KEY;
  if (!apiKey) {
    throw fail(500, {
      status: "fail",
      code: "1801",
      message:
        "Mandatory X-AUTH-CLIENT header containing the API key is missing from the request.",
    });
  }

  const integrationId = process.env.VERIFF_INTEGRATION_ID;
  let lastError = fail(502, {
    status: "fail",
    message: "Veriff did not return a session",
  });

  for (const host of hosts()) {
    let result = await postSession(host, apiKey);
    if (!result.ok && needsIntegrationId(result.data)) {
      result = await postSession(host, apiKey, integrationId);
    }

    if (result.ok && result.data?.verification?.url && result.data?.verification?.id) {
      return {
        url: result.data.verification.url,
        id: result.data.verification.id,
      };
    }

    // 1803 means this key is not registered on this host. Try the next one.
    if (String(result.data?.code) === "1803") {
      lastError = fail(result.status, result.data);
      continue;
    }

    throw fail(result.status || 502, {
      status: result.data?.status || "fail",
      code: result.data?.code,
      message: result.data?.message || "Veriff rejected the session request",
    });
  }

  throw lastError;
}

export async function getVeriffDecision(sessionId) {
  if (!sessionId || !/^[0-9a-f-]{36}$/i.test(sessionId)) {
    throw fail(400, { status: "fail", message: "A valid session id is required" });
  }

  const apiKey = process.env.VERIFF_API_KEY;
  const secret = process.env.VERIFF_SECRET_KEY;
  if (!apiKey || !secret) {
    throw fail(500, {
      status: "fail",
      message: "Veriff API key and secret key are required",
    });
  }

  const signature = createHmac("sha256", secret).update(sessionId).digest("hex");
  let lastError = fail(502, {
    status: "fail",
    message: "Veriff did not return a decision",
  });

  for (const host of hosts()) {
    const result = await requestJson(
      "GET",
      `${host}/v1/sessions/${sessionId}/decision`,
      {
        "X-AUTH-CLIENT": apiKey,
        "X-HMAC-SIGNATURE": signature,
      }
    );

    if (result.ok) return result.data;

    if (result.status === 404) {
      lastError = fail(404, result.data);
      continue;
    }

    throw fail(result.status || 502, {
      status: result.data?.status || "fail",
      code: result.data?.code,
      message: result.data?.message || "Veriff rejected the decision request",
    });
  }

  throw lastError;
}
