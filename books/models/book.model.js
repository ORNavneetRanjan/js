const { integer } = require("drizzle-orm/pg-core");
const { text } = require("drizzle-orm/pg-core");
const { uuid } = require("drizzle-orm/pg-core");
const { varchar } = require("drizzle-orm/pg-core");
const { pgTable } = require("drizzle-orm/pg-core");
const { authorTable } = require("./author.model");
const { index } = require("drizzle-orm/pg-core");
const { sql } = require("drizzle-orm");

const booksTable = pgTable(
  "books",
  {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    title: varchar({ length: 127 }).notNull(),
    description: text(),
    authorId: uuid()
      .references(() => authorTable.id)
      .notNull(),
  },
  (table) => [
    index("title_search").using(
      "gin",
      sql`to_tsvector('english', ${table.title})`,
    ),
  ],
);

module.exports = { booksTable };
