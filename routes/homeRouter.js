const express = require("express");
const router = express.Router();
const { fetchQuestion } = require("../controllers/homeController.js");
const { logTime } = require("../middlewares/status.js");

router.use(logTime);

router.post("/", fetchQuestion);

module.exports = router;
