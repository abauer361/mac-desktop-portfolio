import React, { useEffect, useRef, useState } from "react";
import { createVeriffFrame, MESSAGES } from "@veriff/incontext-sdk";

const ROOT_ID = "veriff-root";

let pendingSession;

function requestSession() {
  if (!pendingSession) {
    pendingSession = fetch("/api/veriff-session", { method: "POST" })
      .then(async (response) => {
        const data = await response.json().catch(() => ({}));
        if (!response.ok || !data.url || !data.id) {
          const detail = [data.code, data.message || data.error]
            .filter(Boolean)
            .join(": ");
          const error = new Error(detail || "Could not start a Veriff session");
          error.limited = response.status === 429;
          throw error;
        }
        return data;
      })
      .finally(() => {
        pendingSession = null;
      });
  }
  return pendingSession;
}

function decisionLabel(status) {
  if (status === "approved") return "Approved";
  if (status === "declined") return "Declined";
  if (status === "resubmission_requested") return "Resubmission requested";
  if (!status) return "Unknown";
  return status.charAt(0).toUpperCase() + status.slice(1).replaceAll("_", " ");
}

function StatusIcon({ status }) {
  const color =
    status === "approved" ? "#34C759" : status === "declined" ? "#FF3B30" : "#FF9F0A";

  return (
    <svg width="56" height="56" viewBox="0 0 72 72" aria-hidden="true">
      <circle cx="36" cy="36" r="36" fill={color} />
      {status === "declined" ? (
        <path
          d="M26 26l20 20M46 26L26 46"
          fill="none"
          stroke="white"
          strokeWidth="4.5"
          strokeLinecap="round"
        />
      ) : status === "approved" ? (
        <path
          d="M22 37.5l9 9L50 26"
          fill="none"
          stroke="white"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ) : (
        <path
          d="M36 22v20M36 50h.1"
          fill="none"
          stroke="white"
          strokeWidth="4.5"
          strokeLinecap="round"
        />
      )}
    </svg>
  );
}

function JsonValue({ value, depth = 0 }) {
  const pad = "  ".repeat(depth);
  const inner = "  ".repeat(depth + 1);

  if (value === null) return <span className="text-[#8e8e93]">null</span>;
  if (typeof value === "string") {
    return <span className="text-[#248a3d]">"{value}"</span>;
  }
  if (typeof value === "number") {
    return <span className="text-[#c45c26]">{String(value)}</span>;
  }
  if (typeof value === "boolean") {
    return <span className="text-[#8e8e93]">{String(value)}</span>;
  }

  if (Array.isArray(value)) {
    if (value.length === 0) return <span>[]</span>;
    return (
      <>
        {"[\n"}
        {value.map((item, index) => (
          <span key={index}>
            {inner}
            <JsonValue value={item} depth={depth + 1} />
            {index < value.length - 1 ? "," : ""}
            {"\n"}
          </span>
        ))}
        {pad}
        {"]"}
      </>
    );
  }

  if (typeof value === "object") {
    const entries = Object.entries(value);
    if (entries.length === 0) return <span>{"{}"}</span>;
    return (
      <>
        {"{\n"}
        {entries.map(([key, item], index) => (
          <span key={key}>
            {inner}
            <span className="text-[#1d1d1f]">"{key}"</span>
            {": "}
            <JsonValue value={item} depth={depth + 1} />
            {index < entries.length - 1 ? "," : ""}
            {"\n"}
          </span>
        ))}
        {pad}
        {"}"}
      </>
    );
  }

  return <span>{String(value)}</span>;
}

function ResponseJson({ value }) {
  return (
    <pre className="text-left font-deja-vu text-[12.5px] leading-6 text-[#6e6e73] whitespace-pre-wrap break-words">
      <JsonValue value={value} />
    </pre>
  );
}

const Veriff = () => {
  const frameRef = useRef(null);
  const [status, setStatus] = useState("loading");
  const [error, setError] = useState(null);
  const [sessionId, setSessionId] = useState(null);
  const [decision, setDecision] = useState(null);

  useEffect(() => {
    let cancelled = false;

    requestSession()
      .then(({ url, id }) => {
        if (cancelled) return;
        setSessionId(id);
        const frame = createVeriffFrame({
          url,
          embedded: true,
          embeddedOptions: { rootElementID: ROOT_ID },
          onEvent: (msg) => {
            if (msg === MESSAGES.SUBMITTED || msg === MESSAGES.FINISHED) {
              frameRef.current?.close();
              setStatus("waiting");
            }
            if (msg === MESSAGES.CANCELED) setStatus("canceled");
          },
        });
        frameRef.current = frame;
        setStatus("ready");
      })
      .catch((err) => {
        if (cancelled) return;
        if (err.limited) {
          setError(err.message);
          setStatus("limited");
          return;
        }
        console.error("Error creating Veriff session:", err);
        setError(err.message);
        setStatus("error");
      });

    return () => {
      cancelled = true;
      frameRef.current?.close();
      frameRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (status !== "waiting" || !sessionId) return undefined;

    let cancelled = false;
    let timer;

    const poll = async () => {
      try {
        const response = await fetch(
          `/api/veriff-decision?sessionId=${encodeURIComponent(sessionId)}`
        );
        const data = await response.json().catch(() => ({}));
        if (cancelled) return;

        if (!response.ok) {
          setDecision(data);
          setError(data.message || data.error || "Could not read the verification response");
          setStatus("error");
          return;
        }

        if (data.verification) {
          setDecision(data);
          setStatus("result");
          return;
        }

        timer = setTimeout(poll, 3000);
      } catch (err) {
        if (cancelled) return;
        setError(err.message);
        setStatus("error");
      }
    };

    poll();

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [status, sessionId]);

  const verification = decision?.verification;

  return (
    <div className="relative h-full min-h-0 w-full min-w-0 flex-1">
      <div id={ROOT_ID} className="h-full w-full" />

      {status === "loading" && (
        <div className="absolute inset-0 flex items-center justify-center bg-white">
          <div className="text-center">
            <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-b-2 border-[#0c3035]"></div>
            <p className="text-[#0c3035]">Loading Veriff verification...</p>
          </div>
        </div>
      )}

      {status === "waiting" && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#f5f5f7] font-mac">
          <div className="text-center">
            <div className="mx-auto mb-5 h-8 w-8 animate-spin rounded-full border-[3px] border-[#d2d2d7] border-t-[#1d1d1f]"></div>
            <p className="font-mac-bold text-[22px] tracking-[-0.02em] text-[#1d1d1f]">
              Waiting for a decision
            </p>
            <p className="mt-1.5 text-[15px] text-[#6e6e73]">
              Veriff is still reviewing this session.
            </p>
          </div>
        </div>
      )}

      {status === "result" && verification && (
        <div className="absolute inset-0 flex min-h-0 flex-col bg-[#f5f5f7] font-mac">
          <div className="flex shrink-0 flex-col items-center px-6 pb-3 pt-6 text-center">
            <StatusIcon status={verification.status} />
            <h2 className="mt-3 font-mac-bold text-[28px] leading-none tracking-[-0.03em] text-[#1d1d1f]">
              {decisionLabel(verification.status)}
            </h2>
            {verification.reason && (
              <p className="mt-2 max-w-lg text-[15px] leading-5 text-[#6e6e73]">
                {verification.reason}
              </p>
            )}
          </div>
          <div className="flex min-h-0 flex-1 flex-col px-5 pb-4">
            <p className="mb-1.5 shrink-0 px-1 text-[13px] text-[#6e6e73]">Response</p>
            <div className="min-h-0 flex-1 overflow-auto rounded-2xl bg-white px-4 py-3 shadow-[0_0_0_0.5px_rgba(0,0,0,0.08)]">
              <ResponseJson value={decision} />
            </div>
          </div>
        </div>
      )}

      {status === "limited" && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#f5f5f7] px-8 font-mac">
          <div className="max-w-sm text-center">
            <p className="font-mac-bold text-[22px] tracking-[-0.02em] text-[#1d1d1f]">
              Daily limit reached
            </p>
            <p className="mt-2 text-[15px] leading-6 text-[#6e6e73]">
              {error}
            </p>
          </div>
        </div>
      )}

      {status === "canceled" && (
        <div className="absolute inset-0 flex items-center justify-center bg-white">
          <p className="text-[#344054]">Verification canceled</p>
        </div>
      )}

      {status === "error" && (
        <div className="absolute inset-0 flex flex-col overflow-auto bg-white p-6">
          <p className="text-center text-red-600">Error: {error}</p>
          {decision && (
            <div className="mt-6">
              <ResponseJson value={decision} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Veriff;
