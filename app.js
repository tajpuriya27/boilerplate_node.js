const express = require("express");
const app = express();
const middleware = require("./utils/middleware");
const cors = require("cors");
// require("./models"); // connection to the database

const indexRouter = require("./routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello from app.js");
});

app.use("/api", indexRouter);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);
module.exports = app;
