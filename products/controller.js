const Service = require("./service");

class Controller {
  static async create(req, res) {
    const product = await Service.createProduct(req.body);
    console.log(req.body);
    res.json(product);
  }
}

module.exports = Controller;
