const dotenv = require("dotenv");
const express = require("express");
const { error } = require("node:console");
const { router: bookRouter } = require("./routes/books.routes");
const { router: authorRouter } = require("./routes/author.routes");
const { middleware } = require("./middleware/middleware");
const { authorTable } = require("./models/author.model");

dotenv.config();
const app = express();
const PORT = 8000;

app.use(express.json());
app.use(middleware);
//database

app.get("/", (req, res) => {
  res.end("Welcome to our Book Store");
});

app.use("/books", bookRouter);
app.use("/author", authorRouter);

app.listen(PORT, () => {
  console.log("Server is Up and Running");
});
