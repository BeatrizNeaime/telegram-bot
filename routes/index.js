const express = require("express");
const telegramRoutes = require("./telegram");

const routes = (app) => {
  app.route("/").get((req, res) => res.status(200).send("API UP"));

  app.use(express.json());
  app.use(telegramRoutes);
}

module.exports = routes;