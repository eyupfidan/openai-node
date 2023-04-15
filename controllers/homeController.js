/**
 * OpenAI module
 * @const
 */
const { Configuration, OpenAIApi } = require("openai");

/**
 * dotenv module
 * @const
 */
const dotenv = require("dotenv");

/**
 * Loads environment variables from a .env file
 * @function
 */
dotenv.config();

/**
 * Configuration object for OpenAI API
 * @type {Object}
 * @const
 * @default
 */
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

/**
 * Middleware that handles HTTP GET requests to the "/fetchQuestion" endpoint
 * @function
 * @async
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Object} - JSON response
 */
const fetchQuestion = async (req, res) => {
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

/**
 * Runs a completion request on the OpenAI API
 * @function
 * @async
 * @param {Object} openai - OpenAI API object
 * @param {string} prompt - Prompt for the completion request
 * @returns {string} - Completed text
 */
const runCompletion = async (openai, prompt) => {
  const { data } = await openai.createCompletion({
    model: "text-davinci-003",
    prompt,
    max_tokens: 1000,
  });

  return data.choices[0].text;
};

/**
 * Module that exports the fetchQuestion middleware function
 * @module
 * @type {Object}
 * @property {Function} fetchQuestion - Middleware that handles HTTP GET requests to the "/fetchQuestion" endpoint
 */
module.exports = {
  fetchQuestion,
};
