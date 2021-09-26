const app = require("./app");
const db = require("./db");
const env = require("./env");

const port = env("PORT");
const clusterURL = env("CLUSTER_URL");

db.connect(clusterURL)
  .then(() => console.log("database connection ready"))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`server running on localhost:${port}`);
});
