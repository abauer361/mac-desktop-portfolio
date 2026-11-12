import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import {
  createVeriffSession,
  getVeriffDecision,
} from "./api/createVeriffSession.js";
import { clientIp, reserveVeriffAttempt } from "./api/veriffRateLimit.js";

function sendJson(res, status, body) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(body));
}

function veriffSessionDevApi() {
  return {
    name: "veriff-session-dev-api",
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const url = new URL(req.url, "http://localhost");

        if (url.pathname === "/api/veriff-session") {
          if (req.method !== "POST") {
            sendJson(res, 405, { error: "Method not allowed" });
            return;
          }
          let release = () => {};
          try {
            release = await reserveVeriffAttempt(clientIp(req));
            sendJson(res, 200, await createVeriffSession());
          } catch (error) {
            if (error.status !== 429) release();
            sendJson(res, error.status || 500, error.body || { error: "Internal server error" });
          }
          return;
        }

        if (url.pathname === "/api/veriff-decision") {
          if (req.method !== "GET") {
            sendJson(res, 405, { error: "Method not allowed" });
            return;
          }
          try {
            sendJson(res, 200, await getVeriffDecision(url.searchParams.get("sessionId")));
          } catch (error) {
            sendJson(res, error.status || 500, error.body || { error: "Internal server error" });
          }
          return;
        }

        next();
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  for (const key of [
    "VERIFF_API_KEY",
    "VERIFF_SECRET_KEY",
    "VERIFF_BASE_URL",
    "VERIFF_INTEGRATION_ID",
  ]) {
    if (env[key]) process.env[key] = env[key];
  }

  return {
    plugins: [react(), veriffSessionDevApi()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
