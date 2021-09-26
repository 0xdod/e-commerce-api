const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const product = require("./products");
const category = require("./categories");

const app = express();
const v1 = express.Router();

app.use("*", cors());
app.use(express.json());
app.use(logger("dev"));
app.use("/api/v1", v1);

v1.use("/products", product.router);
v1.use("/categories", category.router);

module.exports = app;
