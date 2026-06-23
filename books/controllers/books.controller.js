const db = require("../db/index");
const { booksTable } = require("../models/book.model");
const { authorTable } = require("../models/author.model");
const { eq, desc, ilike, sql } = require("drizzle-orm");

const getAllBooks = async (req, res) => {
  res.setHeader("x-piy", "Navneet Ranjan");
  const search = req.query.search;
  let books;

  if (search) {
    books = await db
      .select()
      .from(booksTable)
      .where(
        sql`to_tsvector('english', ${booksTable.title}) @@ plainto_tsquery('english', ${search})`,
      );
    return res.json(books);
  }

  books = await db.select().from(booksTable);
  return res.json(books);
};

const getBookById = async (req, res) => {
  const id = parseInt(req.params.id);

  if (isNaN(id))
    return res.status(400).json({ error: `id must be of type number` });

  const book = await db
    .select()
    .from(booksTable)
    .where(eq(booksTable.id, id))
    .leftJoin(authorTable, eq(booksTable.authorId, authorTable.id));

  if (book.length === 0) {
    return res
      .status(404)
      .json({ error: `Book with id ${id} does not exits!` });
  }

  return res.json(book[0]);
};

const creteNewBook = async (req, res) => {
  const { title, description, authorEmail } = req.body;

  if (!title || title === "") {
    return res.status(400).json({ error: "Title is required" });
  }

  if (!authorEmail || authorEmail === "") {
    return res.status(400).json({ error: "Author is required" });
  }

  const author = await db
    .select()
    .from(authorTable)
    .where(eq(authorTable.email, authorEmail));

  if (author.length === 0) {
    return res.status(400).json({
      error: `Author with email: ${authorEmail} doesn't exits, first created a new author or correct the email address`,
    });
  }

  const newBook = { title, description, authorId: author[0].id };

  const bookId = await db.insert(booksTable).values(newBook).returning({
    id: booksTable.id,
  });

  return res
    .status(201)
    .end(`Book with id:${bookId[0].id} created successfully`);
};

const deleteBookById = async (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id))
    return res.status(400).json({ error: `id must be of type number` });

  const book = await db.select().from(booksTable).where(eq(booksTable.id, id));

  if (book.length === 0)
    return res
      .status(404)
      .json({ error: `Book with id:${id} does not exits!` });

  const bookId = await db
    .delete(booksTable)
    .where(eq(booksTable.id, book[0].id))
    .returning({
      id: booksTable.id,
    });

  return res
    .status(200)
    .json({ message: `Book with id:${bookId[0].id} deleted successfully` });
};

module.exports = {
  getAllBooks,
  getBookById,
  creteNewBook,
  deleteBookById,
};
