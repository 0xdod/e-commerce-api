const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  inStock: Boolean,
  inStockCount: Number,
  image: String,
});

const Product = mongoose.model("Product", productSchema);

module.exports.Product = Product;
