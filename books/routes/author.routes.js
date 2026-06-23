const express = require("express");
const {
  getAllAuthors,
  createAuthor,
  deleteAuthor,
  getBooksByAuthor,
} = require("../controllers/author.controller");
const router = express.Router();

router.get("/", getAllAuthors);

router.get("/:email", getBooksByAuthor);

router.post("/create", createAuthor);

router.delete("/", deleteAuthor);

module.exports = { router };
