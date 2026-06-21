const { integer } = require("drizzle-orm/pg-core");
const { text } = require("drizzle-orm/pg-core");
const { uuid } = require("drizzle-orm/pg-core");
const { varchar } = require("drizzle-orm/pg-core");
const { pgTable } = require("drizzle-orm/pg-core");
const { authorTable } = require("./author.model");

const booksTable = pgTable("books", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  title: varchar({ length: 127 }).notNull(),
  description: text(),
  authorId: uuid()
    .references(() => authorTable.id)
    .notNull(),
});

module.exports = { booksTable };
