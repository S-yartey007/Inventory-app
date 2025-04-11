const queries = require("../db/queries");
exports.getGenres = async (req, res) => {
  const genres = await queries.getAllGenres();
  console.log(genres);
  res.render("genres", { genres });
};

exports.getGenre = async (req, res) => {
  const id = req.params.id;
  const games = await queries.getAllGenreGames(id);
  res.render("genre", { games });
};

exports.deleteGenre = async (req, res) => {
  const id = req.params.id;
  await queries.deleteGenre(id);
  console.log("deleted");
  res.json({ redirect: "/genres" });
};

exports.createGenreForm = async (req, res) => {
  res.render("createGenre");
};

exports.createGenre = async (req, res) => {
  const { name } = req.body;
  await queries.insertGenre(name);
  res.redirect("/genres");
};
