const router = require("express").Router();

const Controller = require("./controller");

router.post("/", Controller.create);
router.get("/", Controller.list);

module.exports = router;
