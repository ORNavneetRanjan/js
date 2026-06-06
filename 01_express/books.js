const express = require("express");
const { error } = require("node:console");

const app = express();
const PORT = 8000;

app.use(express.json());

//database

const books = [
  { id: 1, title: "Book One", author: "Author ONe" },
  { id: 2, title: "Book two", author: "Author two" },
];

app.get("/", (req, res) => {
  res.end("Welcome to our Book Store");
});

app.get("/books", (req, res) => {
  res.setHeader("x-piy", "Navneet Ranjan");
  res.json(books);
});

app.get("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);

  if (isNaN(id))
    return res.status(400).json({ error: `id must be of type number` });

  const book = books.find((e) => e.id === id);

  if (!book) {
    return res
      .status(404)
      .json({ error: `Book with id ${id} does not exits!` });
  }

  return res.json(book);
});

app.post("/books/create", (req, res) => {
  console.log(req.body);
  const { title, author } = req.body;

  if (!title || title === "") {
    return res.status(400).json({ error: "Title is required" });
  }

  if (!author || author === "") {
    return res.status(400).json({ error: "Author is required" });
  }

  const id = books.length + 1;
  const newBook = { id, title, author };
  books.push(newBook);

  return res.status(201).end(`Book with id:${id} created successfully`);
});

app.delete("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id))
    return res.status(400).json({ error: `id must be of type number` });
  if (id <= 0 || id > books.length)
    return res
      .status(404)
      .json({ error: `Book with id:${id} does not exits!` });

  const index = books.findIndex((e) => e.id === id);

  books.splice(index, 1);
  return res
    .status(200)
    .json({ message: `Book with id:${id} deleted successfully` });
});

app.listen(PORT, () => {
  console.log("Server is Up and Running");
});
