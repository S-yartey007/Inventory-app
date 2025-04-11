#! /usr/bin/env node

const { Client } = require("pg");
const fs = require("fs");
const path = require("path");

const SQL = `
CREATE TABLE games (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  release_date DATE,
  description TEXT
);

CREATE TABLE developers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  founded_year INT
);

CREATE TABLE genres (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL
);

CREATE TABLE game_developers (
  game_id INT REFERENCES games(id),
  developer_id INT REFERENCES developers(id),
  PRIMARY KEY (game_id, developer_id)
);

CREATE TABLE game_genres (
  game_id INT REFERENCES games(id),
  genre_id INT REFERENCES genres(id),
  PRIMARY KEY (game_id, genre_id)
);

`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString:
      "postgresql://message_db_kcrz_user:7IiyS6BI4CjRqJ8zTPMP0AI4S7707Dhs@cvr7ehmuk2gs73cb6b6g-a.oregon-postgres.render.com:5432/message_db_kcrz",
    ssl: {
      rejectUnauthorized: false,
    },
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}
main();
