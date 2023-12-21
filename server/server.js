const axios = require("axios");

async function queryChatGPT(prompt) {
  const apiKey = "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"; // Replace with your actual API key
  const url = "https://api.openai.com/v1/engines/davinci-codex/completions";

  const headers = {
    Authorization: `Bearer ${apiKey}`,
    "Content-Type": "application/json",
  };

  const data = {
    prompt: prompt,
    max_tokens: 150,
  };

  try {
    const response = await axios.get(url, data, { headers: headers });
    console.log(response.data.choices[0].text);
  } catch (error) {
    console.error("Error making API request:", error);
  }
}

// Example usage
queryChatGPT("Translate 'Hello, world!' into Spanish.");
