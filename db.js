const mongoose = require("mongoose");

async function connect(url) {
  return await mongoose.connect(url);
}

async function disconnect() {
  return await mongoose.disconnect();
}

module.exports = {
  connect,
  disconnect,
};
