export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { phoneNumber } = req.body;

  if (!phoneNumber) {
    return res.status(400).json({ error: "Phone number is required" });
  }

  try {
    const response = await fetch("https://api.bland.ai/v1/calls", {
      method: "POST",
      headers: {
        authorization: process.env.BLAND_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        pathway_id: "6833b62e-b9ee-4a15-b7af-349e83fd848a",
        phone_number: phoneNumber,
        voice: "june",
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json(data);
    }

    return res.status(200).json(data);
  } catch (error) {
    console.error("Bland AI API error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
