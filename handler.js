const serverless = require("serverless-http");
const express = require("express");
const app = express();

app.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from root!",
  });
});

app.get("/hello", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from path!",
  });
});

app.get("/hello/:name", (req, res, next) => {
  return res.status(200).json({
    message: `Hello ${req.params.name}!`,
  });
});

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

module.exports.handler = serverless(app);
