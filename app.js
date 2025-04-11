const express = require("express");
const app = express();
const genreRouter = require("./Routers/genreRouter.js");
const gameRouter = require("./Routers/gameRouter.js");
require("dotenv").config();
const methodOverride = require("method-override");

const { PORT } = process.env;
app.use(methodOverride("_method"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use("/genres", genreRouter);
app.use("/games", gameRouter);
app.get("/", (req, res) => {
  res.render("index", { title: "Game Inventory" });
});

app.listen(PORT, () => {
  console.log(`Express running at PORT:${PORT}`);
});
