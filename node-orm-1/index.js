const { db } = require("./db/index");
const { userTable } = require("./drizzle/schema");
const dotenv = require("dotenv");

dotenv.config();

async function getAllUsers() {
  const users = await db.select().from(userTable);
  console.log(`Users in DB`, users);
  return users;
}

async function createUser({ id, name, age, email }) {
  await db.insert(userTable).values({
    name,
    age,
    email,
  });
}

// createUser({ id: 1, name: "Navneet", email: "abc@efg.com", age: 22 });
// createUser({ id: 2, name: "Ranjan", email: "abd@efg.com", age: 22 });

getAllUsers();
