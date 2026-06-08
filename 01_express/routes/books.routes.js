const express = require("express");

const router = express.Router();
const { BOOKS: books } = require("../db/books");

router.get("/", (req, res) => {
  res.setHeader("x-piy", "Navneet Ranjan");
  return res.json({ books });
});

router.get("/:id", (req, res) => {
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

router.post("/create", (req, res) => {
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

router.delete("/:id", (req, res) => {
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

exports.router = router;
