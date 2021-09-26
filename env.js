require("dotenv").config();

function Env(key) {
  return process.env[key];
}

module.exports = Env;
