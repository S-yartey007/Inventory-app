const { Pool } = require("pg");
require("dotenv").config({
  path: "../.env",
});
module.exports = new Pool({
  host: "localhost",
  user: "emmanuel",
  database: "gamedata",
  password: "phantompain",
  port: 5432,
});
