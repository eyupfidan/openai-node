/**
 * express module
 * @const
 */
const express = require("express");

/**
 * express application
 * @type {Object}
 */
const app = express();

/**
 * The port number on which the server will listen
 * @type {number}
 * @constant
 * @default
 */
const port = 8080;

/**
 * Home router module
 * @const
 */
const homeRouter = require("./routes/homeRouter.js");

/**
 * Cross-Origin Resource Sharing options
 * @type {Object}
 * @const
 * @default
 */
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

/**
 * Middleware that handles the "/fetchQuestion" endpoint
 * @function
 * @memberof app
 * @param {string} path - Route path
 * @param {Object} middleware - Middleware functions
 * @returns {Object} - Express application instance
 */
app.use("/fetchQuestion", homeRouter);

/**
 * Middleware that handles CORS-related issues
 * @function
 * @memberof app
 * @param {Object} options - CORS options
 * @returns {Object} - Express application instance
 */
app.use(cors(corsOptions));

/**
 * Starts the server listening for requests on the specified port
 * @function
 * @memberof app
 * @param {number} port - Port number
 * @param {Function} callback - Function to execute once server starts listening
 * @returns {void}
 */
app.listen(port, () => {});
