const { ilike, or, eq } = require("drizzle-orm");
const db = require("../db");
const { authorTable } = require("../models/author.model");
const { booksTable } = require("../models/book.model");

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const getAllAuthors = async (req, res) => {
  const name = req.query.name;
  let authors;
  if (name) {
    authors = await db
      .select()
      .from(authorTable)
      .where(
        or(
          ilike(authorTable.firstName, `%${name}%`),
          ilike(authorTable.lastName, `%${name}%`),
        ),
      );
  } else authors = await db.select().from(authorTable);
  return res.json({ authors });
};

const getBooksByAuthor = async (req, res) => {
  console.log(req.params);
  const { email } = req.params;
  if (!email || email.trim() === "")
    return res
      .status(400)
      .json({ message: `Please provide a valid email address` });

  const author = await db
    .select()
    .from(authorTable)
    .where(eq(authorTable.email, email));

  if (author.length === 0)
    return res
      .status(404)
      .json({ message: `Author with email ${email} doesn't exist` });

  const data = await db
    .select()
    .from(booksTable)
    .where(eq(booksTable.authorId, author[0].id));

  return res.status(200).json({ data });
};

const createAuthor = async (req, res) => {
  const { firstName, lastName, email } = req.body;
  if (!firstName || !email || firstName.trim() === "" || email.trim() === "")
    return res
      .status(400)
      .json({ message: `Please provide a valid firstName and email address` });

  if (!EMAIL_REGEX.test(email)) {
    return res
      .status(400)
      .json({ message: `Please provide a correct email address` });
  }

  const ifEmailExists = await db
    .select()
    .from(authorTable)
    .where(eq(authorTable.email, email));

  if (ifEmailExists.length !== 0) {
    return res
      .status(400)
      .json({ message: `Author with email: ${email} already exists` });
  }

  const author = { firstName, lastName, email };
  const id = await db.insert(authorTable).values(author).returning({
    id: authorTable.id,
  });

  return res.status(201).json({
    message: `Author with id: ${id[0].id} is created successfully !!!`,
  });
};

const deleteAuthor = async (req, res) => {
  const { email } = req.body;
  if (!email)
    return res
      .status(400)
      .json({ message: `Please enter a valid email address` });

  const author = await db
    .select()
    .from(authorTable)
    .where(eq(authorTable.email, email));

  if (author.length === 0)
    return res
      .status(404)
      .json({ message: `Author with email ${email} doesn't exist` });

  const id = author[0].id;

  await db.delete(booksTable).where(eq(booksTable.authorId, id));
  await db.delete(authorTable).where(eq(authorTable.email, email));

  return res.status(200).json({
    message: `Author with id ${id} and their books have been deleted successfully !!`,
  });
};

module.exports = {
  getAllAuthors,
  getBooksByAuthor,
  createAuthor,
  deleteAuthor,
};
