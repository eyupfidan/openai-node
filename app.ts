/**
 * express module
 * @const
 */
import express, { Application } from "express";

/**
 * CORS module
 * @const
 */
import cors from "cors";

/**
 * Home router module
 * @const
 */
import homeRouter from "./routes/homeRouter";

/**
 * express application
 * @type {Application}
 */
const app: Application = express();

/**
 * The port number on which the server will listen
 * @type {number}
 * @constant
 * @default
 */
const port: number = 8080;

/**
 * Cross-Origin Resource Sharing options
 * @type {cors.CorsOptions}
 * @const
 * @default
 */
const corsOptions: cors.CorsOptions = {
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
 * @returns {Application} - Express application instance
 */
app.use("/fetchQuestion", homeRouter);

/**
 * Middleware that handles CORS-related issues
 * @function
 * @memberof app
 * @param {cors.CorsOptions} options - CORS options
 * @returns {Application} - Express application instance
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
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
