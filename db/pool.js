const { Pool } = require("pg");
require("dotenv").config({
  path: "../.env",
});
module.exports = new Pool({
  host: "cvr7ehmuk2gs73cb6b6g-a.oregon-postgres.render.com",
  user: "message_db_kcrz_user",
  database: "message_db_kcrz",
  password: "7IiyS6BI4CjRqJ8zTPMP0AI4S7707Dhs",
  port: 5432,
  ssl: {
    rejectUnauthorized: false,
  },
});
