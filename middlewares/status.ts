/**
 * Express middleware that logs the current time
 * @function
 * @param {express.Request} req - Express request object
 * @param {express.Response} res - Express response object
 * @param {express.NextFunction} next - Function to call the next middleware
 * @returns {void}
 */
import Express from "express";

export const logTime = (
  req: Express.Request,
  res: Express.Response,
  next: Express.NextFunction
): void => {
  console.log("Time:", Date.now());
  next();
};
