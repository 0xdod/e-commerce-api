const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  richDescription: String,
  price: {
    type: Number,
    required: true,
    default: 0.0,
  },
  image: String,
  images: [
    {
      type: String,
    },
  ],
  brand: String,
  numInStock: {
    type: Number,
    min: 0,
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Category",
  },
  tags: [
    {
      type: String,
    },
  ],
  rating: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
