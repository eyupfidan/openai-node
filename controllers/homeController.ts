/**
 * OpenAI module
 * @const
 */
import { Configuration, OpenAIApi } from "openai";
import express, { Request, Response, Router } from "express";


/**
 * dotenv module
 * @const
 */
import dotenv from "dotenv";

/**
 * Loads environment variables from a .env file
 * @function
 */
dotenv.config();

/**
 * Configuration object for OpenAI API
 * @type {Configuration}
 * @const
 * @default
 */
const configuration: Configuration = new Configuration({
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
export const fetchQuestion = async (
  req: express.Request,
  res: express.Response
): Promise<void> => {
  const requestText: string = req.query.requestText as string;

  try {
    const openai: OpenAIApi = new OpenAIApi(configuration);

    const result: string = await runCompletion(openai, requestText);

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
 * @param {OpenAIApi} openai - OpenAI API object
 * @param {string} prompt - Prompt for the completion request
 * @returns {string} - Completed text
 */
const runCompletion = async (
  openai: OpenAIApi,
  prompt: string
): Promise<string> => {
  const { data } = await openai.createCompletion({
    model: "text-davinci-003",
    prompt,
    max_tokens: 1000,
  });

  const dataChoices : string = data.choices[0].text || '';

  return dataChoices;
};
