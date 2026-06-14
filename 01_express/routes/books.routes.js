const express = require("express");
const controller = require("../controllers/books.controller");
const router = express.Router();

router.get("/", controller.getAllBooks);

router.get("/:id", controller.getBookById);

router.post("/create", controller.creteNewBook);

router.delete("/:id", controller.deleteBookById);

exports.router = router;
