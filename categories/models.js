const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: "#fff",
  },
  icon: {
    type: String,
    default: "no_icon.png",
  },
  image: {
    type: String,
    default: "no_image.png",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
  },
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
