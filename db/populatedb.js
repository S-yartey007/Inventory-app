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
      "postgresql://emmanuel:phantompain@localhost:5432/gamedata",
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
