import { createVeriffSession } from "./createVeriffSession.js";
import { clientIp, reserveVeriffAttempt } from "./veriffRateLimit.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  let release = () => {};
  try {
    release = await reserveVeriffAttempt(clientIp(req));
    const session = await createVeriffSession();
    return res.status(200).json(session);
  } catch (error) {
    if (error.status !== 429) release();
    if (error.status !== 429) {
      console.error("Veriff session error:", error.body || error.message);
    }
    return res.status(error.status || 500).json(
      error.body || { error: "Internal server error" }
    );
  }
}
