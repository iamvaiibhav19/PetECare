const express = require("express");

const { sendMail } = require("../controllers/getInTouchController");

const router = express.Router();

router.route("/sendMail").post(sendMail);

module.exports = router;
