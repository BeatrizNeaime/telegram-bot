require("dotenv").config();
const express = require("express");
const routes = require("../routes/index");
const cors = require("cors");

const app = express();
const allowedOrigins = process.env.ENABLE_CORS?.split(';').map(origin => origin.trim()) || [];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error('Not allowed by CORS'));
    }
  }
}));

app.use(express.json());


routes(app);

module.exports = app;