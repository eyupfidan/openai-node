/**
 * express module
 * @const
 */
import express, { Request, Response, Router } from "express";

/**
 * Home controller module
 * @const
 */
import { fetchQuestion } from "../controllers/homeController";

/**
 * Status middleware module
 * @const
 */
import { logTime } from "../middlewares/status";

/**
 * Router object of the express module
 * @type {Router}
 * @const
 */
const router: Router = express.Router();

/**
 * Middleware that logs the time when the request is made
 * @function
 * @memberof router
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 * @param {Function} next - Function to call the next middleware
 * @returns {void}
 */
router.use(logTime);

/**
 * Middleware that handles HTTP POST requests to the root route
 * @function
 * @memberof router
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 * @returns {void}
 */
router.post("/", fetchQuestion);

/**
 * Exports the router object for use in other modules
 * @module
 * @type {Router}
 */
export default router;
