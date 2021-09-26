const express = require("express");
const logger = require("morgan");

const app = express();
const v1 = express.Router();
const product = require("./products");

app.use(express.json());
app.use(logger("dev"));
app.use("/api/v1", v1);

v1.get("/", (_, res) => {
  res.end("Hello world");
});

v1.post("/products", product.create);

module.exports = app;
