const express = require("express");
const logger = require("morgan");

const db = require("./db");
const env = require("./env");

const app = express();
const v1 = express.Router();
const port = env("PORT");

v1.get("/", (_, res) => {
  res.end("Hello world");
});

db.connect(env("CLUSTER_URL"))
  .then(() => console.log("database connection ready"))
  .catch((err) => console.log(err));

app.use(logger("dev"));
app.use("/api/v1", v1);
app.use(express.json());
app.listen(port, () => {
  console.log(`server running on localhost:${port}`);
});
