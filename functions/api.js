const express = require("express");
const serverless = require("serverless-http");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Minha API Express está funcionando!");
});

module.exports.handler = serverless(app);
