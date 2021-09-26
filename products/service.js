const { Product } = require("./model");

class MongoService {
  static async createProduct(data) {
    const product = new Product(data);
    return await product.save();
  }
}

module.exports = MongoService;
