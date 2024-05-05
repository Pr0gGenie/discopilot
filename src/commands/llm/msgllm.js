const OpenAI = require('openai');
const dotenv = require('dotenv').config();

const openai = new OpenAI({ // Sets appropriate variables
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: process.env.OPENAI_BASE_URL,
})

async function msgllm(message) { // Calls the OpenAI API and returns the response
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: message }],
    model: process.env.OPENAI_MODEL,
  });
  return completion.choices[0].message.content;
}

module.exports = { msgllm };
