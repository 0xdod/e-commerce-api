const router = require("express").Router();

const Controller = require("./controller");

router.post("/", Controller.create);
router.get("/", Controller.list);
router.delete("/:id", Controller.delete);

module.exports = router;
