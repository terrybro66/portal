const express = require("express");
const axios = require("axios");
const app = express();
const port = 3000;

async function queryChatGPT(prompt) {
  // ... existing code ...
}

// Define your route
app.get("/chat", async (req, res) => {
  const prompt = req.query.prompt;
  try {
    const response = await queryChatGPT(prompt);
    res.json(response);
  } catch (error) {
    console.error("Error making API request:", error);
    res.status(500).json({ error: "Error making API request" });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
