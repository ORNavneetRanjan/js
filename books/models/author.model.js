const { varchar } = require("drizzle-orm/pg-core");
const { uuid } = require("drizzle-orm/pg-core");
const { pgTable } = require("drizzle-orm/pg-core");

const authorTable = pgTable("authors", {
  id: uuid().primaryKey().defaultRandom(),
  firstName: varchar({ length: 25 }).notNull(),
  lastName: varchar({ length: 55 }),
  email: varchar({ length: 255 }).notNull().unique(),
});

module.exports = { authorTable };
