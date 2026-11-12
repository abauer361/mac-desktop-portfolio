import { getVeriffDecision } from "./createVeriffSession.js";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const decision = await getVeriffDecision(req.query.sessionId);
    return res.status(200).json(decision);
  } catch (error) {
    console.error("Veriff decision error:", error.body || error.message);
    return res.status(error.status || 500).json(
      error.body || { error: "Internal server error" }
    );
  }
}
