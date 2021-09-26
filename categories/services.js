const Category = require("./models");

class MongoCategoryService {
  static async createCategory(data) {
    const category = new Category(data);
    return await category.save();
  }
  static async getAllCategories() {
    return await Category.find();
  }
  static async deleteCategory(id) {
    return await Category.findByIdAndDelete(id);
  }
}

module.exports = { MongoCategoryService };
