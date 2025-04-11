const { Router } = require("express");
const categoryController = require("../controllers/gameController");
const categoryRouter = Router();

categoryRouter.get("/", categoryController.getItems);

module.exports = categoryRouter;
