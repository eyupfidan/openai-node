const express = require('express')
const app = express()
const port = 3000
const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config()
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

app.get('/', (req, res) => {
  const openai = new OpenAIApi(configuration);

  async function runCompletion (prompt) {
  const completion = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: prompt,
    max_tokens: 1,
  });
  return await completion.data.choices[0].text;
  }
  
 res.send( runCompletion('write a 500 words article for buy youtube subscribers keyword'))
})


app.listen(port, () => {
  console.log(`Example app listening on port localhost:${port}`)
})
