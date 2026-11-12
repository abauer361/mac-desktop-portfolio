import { createHmac } from "crypto";
import { mkdirSync, readFileSync, renameSync, writeFileSync } from "fs";
import { tmpdir } from "os";
import { dirname, join } from "path";

const VISITOR_LIMIT = 10;
const TOTAL_LIMIT = 100;
const WINDOW_MS = 24 * 60 * 60 * 1000;

const storePath = process.env.VERIFF_RATE_LIMIT_PATH
  ? process.env.VERIFF_RATE_LIMIT_PATH
  : process.env.VERCEL
    ? join(tmpdir(), "veriff-usage.json")
    : join(process.cwd(), ".data", "veriff-usage.json");

let usage = null;
let queue = Promise.resolve();

function load() {
  if (usage) return usage;
  try {
    usage = JSON.parse(readFileSync(storePath, "utf8"));
  } catch {
    usage = {};
  }
  if (!usage || typeof usage !== "object" || Array.isArray(usage)) usage = {};
  return usage;
}

function save() {
  try {
    mkdirSync(dirname(storePath), { recursive: true });
    const temp = `${storePath}.${process.pid}.tmp`;
    writeFileSync(temp, JSON.stringify(usage));
    renameSync(temp, storePath);
  } catch (error) {
    console.error("Veriff rate limit could not be saved:", error.message);
  }
}

function hashIp(ip) {
  const pepper = process.env.VERIFF_SECRET_KEY || "veriff-rate-limit";
  return createHmac("sha256", pepper).update(ip).digest("hex");
}

function normalizeIp(ip) {
  const value = String(ip || "").trim();
  if (value.startsWith("::ffff:")) return value.slice(7);
  return value || "unknown";
}

export function clientIp(req) {
  const real = req.headers?.["x-real-ip"];
  if (typeof real === "string" && real.trim()) return normalizeIp(real);
  const forwarded = req.headers?.["x-forwarded-for"];
  if (typeof forwarded === "string" && forwarded.trim()) {
    return normalizeIp(forwarded.split(",")[0]);
  }
  return normalizeIp(req.socket?.remoteAddress);
}

function prune(now) {
  const data = load();
  for (const [key, stamps] of Object.entries(data)) {
    const recent = (Array.isArray(stamps) ? stamps : []).filter(
      (ts) => typeof ts === "number" && now - ts < WINDOW_MS
    );
    if (recent.length) data[key] = recent;
    else delete data[key];
  }
  return data;
}

function limitError(message) {
  const error = new Error("Daily verification limit reached");
  error.status = 429;
  error.body = { message };
  return error;
}

function reserve(ip) {
  const now = Date.now();
  const data = prune(now);
  const key = hashIp(normalizeIp(ip));
  const recent = data[key] || [];
  const total = Object.values(data).reduce((sum, stamps) => sum + stamps.length, 0);
  if (recent.length >= VISITOR_LIMIT) {
    save();
    throw limitError("This verification can only be started 10 times a day.");
  }
  if (total >= TOTAL_LIMIT) {
    save();
    throw limitError("Only 100 verifications can be started in a day.");
  }
  recent.push(now);
  data[key] = recent;
  save();
  return () => {
    const current = load();
    const stamps = current[key] || [];
    const index = stamps.lastIndexOf(now);
    if (index !== -1) stamps.splice(index, 1);
    if (stamps.length) current[key] = stamps;
    else delete current[key];
    save();
  };
}

export function reserveVeriffAttempt(ip) {
  const run = queue.then(() => reserve(ip));
  queue = run.then(
    () => undefined,
    () => undefined
  );
  return run;
}
