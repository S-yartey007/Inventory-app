const pool = require("./pool");

async function getAllGenres() {
  const { rows } = await pool.query("SELECT * FROM genres");
  return rows;
}

async function getAllGenreGames(id) {
  const { rows } = await pool.query(
    `
        SELECT g.*
FROM games g
JOIN game_genres gg ON g.id = gg.game_id
JOIN genres gen ON gg.genre_id = gen.id
WHERE gen.id = $1;
`,
    [id]
  );
  return rows;
}

async function deleteGenre(id) {
  await pool.query(`DELETE FROM genres WHERE id = $1;`, [id]);
}

async function getAllGames() {
  const { rows } = await pool.query(`
        SElECT * FROM games
        `);
  return rows;
}

async function insertGenre(name) {
  await pool.query("INSERT INTO genres (name) VALUES ($1)", [name]);
}

async function insertGame(title, release_date, description) {
  const { rows } = await pool.query(
    "INSERT INTO games (title, release_date,description) VALUES ($1, $2,$3) RETURNING id",
    [title, release_date, description]
  );
  return rows;
}

async function insertGameGenre(gameId, genreId) {
  await pool.query(
    "INSERT INTO game_genres (game_id, genre_id) VALUES ($1, $2)",
    [gameId, genreId]
  );
}
async function getAllDevelopers() {
  const { rows } = await pool.query("SELECT * FROM developers");
  return rows;
}

async function insertGameDevelopers(gameId, devId) {
  await pool.query(
    "INSERT INTO game_developers (game_id, developer_id) VALUES ($1, $2)",
    [gameId, devId]
  );
}
async function deleteGame(gameId) {
  await pool.query(`DELETE FROM games WHERE id = $1;`, [gameId]);
}

module.exports = {
  getAllGenres,
  getAllGenreGames,
  getAllGames,
  insertGenre,
  deleteGenre,
  getAllDevelopers,
  insertGame,
  insertGameGenre,
  insertGameDevelopers,
  deleteGame,
};
