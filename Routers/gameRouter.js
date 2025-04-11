const { Router } = require("express");
const gameController = require("../controllers/gameController");
const gameRouter = Router();

gameRouter.get("/", gameController.getAllGames);
gameRouter.get("/create", gameController.createGame);
gameRouter.post("/create", gameController.createGamePost);
gameRouter.delete("/:id", gameController.deleteGame);
module.exports = gameRouter;
