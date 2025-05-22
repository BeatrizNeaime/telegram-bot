const express = require("express");
const telegramRoutes = express.Router();

const { sendMessage } = require("../controllers/telegramController");

telegramRoutes.post("/sendMessage", sendMessage);

module.exports = telegramRoutes;