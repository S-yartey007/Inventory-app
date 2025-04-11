const queries = require("../db/queries");

exports.getAllGames = async (req, res) => {
  const games = await queries.getAllGames();
  res.render("games", { title: "These are all your games", games });
};

exports.createGame = async (req, res) => {
  const genres = await queries.getAllGenres();
  const developers = await queries.getAllDevelopers();
  res.render("createGame", { genres, developers });
};

exports.deleteGame = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  try {
    await queries.deleteGame(id);
    res.redirect("/games");
  } catch (err) {
    console.log(err);
  }
};

exports.createGamePost = async (req, res) => {
  const { title, release_date, description } = req.body;
  const genres = Array.isArray(req.body.genres)
    ? req.body.genres
    : [req.body.genres];
  const developers = Array.isArray(req.body.developers)
    ? req.body.developers
    : [req.body.developers];

  try {
    // Insert into games table
    const rows = await queries.insertGame(title, release_date, description);
    const gameId = rows[0].id;

    // Insert into game_genres
    for (let genreId of genres) {
      await queries.insertGameGenre(gameId, genreId);
    }

    // Insert into game_developers
    for (let devId of developers) {
      await queries.insertGameDevelopers(gameId, devId);
    }

    res.redirect("/games");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error adding game");
  }
};
