/**
 * express module
 * @const
 */
const express = require("express");

/**
 * Router object of the express module
 * @type {Object}
 * @const
 */
const router = express.Router();

/**
 * Home controller module
 * @const
 */
const { fetchQuestion } = require("../controllers/homeController.js");

/**
 * Status middleware module
 * @const
 */
const { logTime } = require("../middlewares/status.js");

/**
 * Middleware that logs the time when the request is made
 * @function
 * @memberof router
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Function to call the next middleware
 * @returns {void}
 */
router.use(logTime);

/**
 * Middleware that handles HTTP POST requests to the root route
 * @function
 * @memberof router
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {void}
 */
router.post("/", fetchQuestion);

/**
 * Exports the router object for use in other modules
 * @module
 * @type {Object}
 */
module.exports = router;
