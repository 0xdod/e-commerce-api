const { Product } = require("./model");

class MongoProductService {
  static async createProduct(data) {
    const product = new Product(data);
    return await product.save();
  }
  static async getAllProducts() {
    return await Product.find();
  }
}

module.exports = { MongoProductService };
