const { Configuration, OpenAIApi } = require("openai");
const dotenv = require("dotenv");

dotenv.config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const getQuestion = async (req, res) => {
  const { requestText } = req.query;

  try {
    const openai = new OpenAIApi(configuration);

    const result = await runCompletion(openai, requestText);

    res.status(200).json(result);
  } catch (error) {
    console.error(error);

    res.status(500).json({ message: "Server Error" });
  }
};

const runCompletion = async (openai, prompt) => {
  const { data } = await openai.createCompletion({
    model: "text-davinci-003",
    prompt,
    max_tokens: 1000,
  });

  return data.choices[0].text;
};

module.exports = {
  getQuestion,
};
