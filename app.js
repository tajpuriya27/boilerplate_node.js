const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from app.js");
});

module.exports = app;
