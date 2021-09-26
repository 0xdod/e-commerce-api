const { MongoProductService } = require("./service");

class Controller {
  static async create(req, res) {
    const product = await MongoProductService.createProduct(req.body);
    console.log(req.body);
    res.json(product);
  }

  static async list(_, res) {
    const products = await MongoProductService.getAllProducts();
    res.json(products);
  }
}

module.exports = Controller;
