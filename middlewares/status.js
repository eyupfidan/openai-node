/**
 * Express middleware that logs the current time
 * @function
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Function to call the next middleware
 * @returns {void}
 */
const logTime = (req, res, next) => {
  console.log("Time:", Date.now());
  next();
};

/**
 * Module that exports the logTime middleware function
 * @module
 * @type {Object}
 * @property {Function} logTime - Express middleware that logs the current time
 */
module.exports = { logTime };
