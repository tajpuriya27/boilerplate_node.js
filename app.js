const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from app.js");
});

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);
module.exports = app;
