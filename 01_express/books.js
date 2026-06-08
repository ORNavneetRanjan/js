const express = require("express");
const { error } = require("node:console");
const { router } = require("./routes/books.routes");
const { middleware } = require("./middleware/middleware");
const app = express();
const PORT = 8000;

app.use(express.json());
app.use(middleware);
//database

app.get("/", (req, res) => {
  res.end("Welcome to our Book Store");
});

app.use("/books", router);

app.listen(PORT, () => {
  console.log("Server is Up and Running");
});
