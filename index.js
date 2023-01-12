const express = require('express')
const app = express()
const port = 80
const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config()
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

app.get('/', (req, res) => {
  const openai = new OpenAIApi(configuration);
  async function runCompletion (prompt) {
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
    max_tokens: 1000,
  })
    return await completion.data.choices[0].text;
  }
  const {requestText} = req.query;
  runCompletion(requestText).then(function(result) {
    res.status(200).json(result)
 })
  
})

app.use(cors(corsOptions)) 
app.listen(port, () => {
})
