const { MongoCategoryService } = require("./services");

class Controller {
  static async create(req, res) {
    let category = await MongoCategoryService.createCategory(req.body);
    res.status(201).json(successAPIResponse("", { category }));
  }

  static async list(_, res) {
    const categories = await MongoCategoryService.getAllCategories();
    if (!categories) {
      res.status(500).json({ status: "fail" });
      return;
    }
    res.json(successAPIResponse("retrieved categories", { categories }));
  }

  static async delete(req, res) {
    const id = req.params.id;
    const deleted = await MongoCategoryService.deleteCategory(id);
    if (!deleted) {
      res.status(404).json(failAPIResponse("cannot delete category"));
      return;
    }

    res.json(successAPIResponse("category deleted", deleted));
  }
}

function successAPIResponse(message, data) {
  return {
    status: "success",
    message,
    data,
  };
}

function failAPIResponse(message) {
  return {
    status: "fail",
    message,
  };
}

module.exports = Controller;
