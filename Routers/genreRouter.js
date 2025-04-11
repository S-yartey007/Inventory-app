const { Router } = require("express");
const genreController = require("../controllers/genreController");
const genreRouter = Router();

genreRouter.get("/", genreController.getGenres);
genreRouter.get("/create", genreController.createGenreForm);
genreRouter.post("/create", genreController.createGenre);
genreRouter.get("/:id", genreController.getGenre);
genreRouter.delete("/:id", genreController.deleteGenre);

module.exports = genreRouter;
