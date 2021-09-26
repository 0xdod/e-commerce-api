const express = require("express");
const logger = require("morgan");

const product = require("./products");

const app = express();
const v1 = express.Router();

app.use(express.json());
app.use(logger("dev"));
app.use("/api/v1", v1);

v1.use("/products", product.router);

module.exports = app;
