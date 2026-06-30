import { eq } from "drizzle-orm";
import db from "../db/index.js";
import { userSession, usersTable } from "../db/schema.js";
import { randomBytes, createHmac } from "crypto";
import { error } from "console";
import jwt from "jsonwebtoken";

export async function users(req, res) {
  const user = req.user;
  console.log(`${user}`);
  if (!user) return res.status(401).json({ error: `Session expired` });
  return res.json({ user });
}

export async function updateUserName(req, res) {
  const user = req.user;
  if (!user) return res.status(401).json({ error: `Session expired` });

  const { name } = req.body;
  console.log(`name: ${name}, user: ${user.userId}`);
  if (!name)
    return res.status(400).json({ error: `Please provide a valid name` });

  const response = await db
    .update(usersTable)
    .set({ name })
    .where(eq(usersTable.id, user.userId))
    .returning({
      id: usersTable.id,
      name: usersTable.name,
    });

  console.log(response);
  return res
    .status(201)
    .json({ message: `Name updated to ${name} for userId: ${response[0].id}` });
}

export async function usersLogin(req, res) {
  const { email, password } = req.body;
  const isEmailExits = await db
    .select({
      id: usersTable.id,
      email: usersTable.email,
      salt: usersTable.salt,
      name: usersTable.name,
      password: usersTable.password,
    })
    .from(usersTable)
    .where(eq(usersTable.email, email));

  if (isEmailExits.length == 0)
    return res.status(404).json({ message: `Email doesn't exits` });

  const salt = isEmailExits[0].salt;
  const existingHash = isEmailExits[0].password;
  const hashedPass = createHmac("sha256", salt).update(password).digest("hex");
  if (existingHash != hashedPass) {
    return res.status(400).json({ error: `Incorrect password` });
  }

  const payload = {
    id: isEmailExits[0].id,
    email: isEmailExits[0].email,
    name: isEmailExits[0].name,
  };
  const token = jwt.sign(payload, process.env.JWT_SECRET);

  return res.json({ status: "success", token });
}

export async function usersSignUp(req, res) {
  const { name, email, password } = req.body;
  const isEmailExits = await db
    .select()
    .from(usersTable)
    .where(eq(usersTable.email, email));

  if (isEmailExits.length != 0)
    return res.status(400).json({ message: `Email already taken` });

  const salt = randomBytes(256).toString("hex");

  const hashedPass = createHmac("sha256", salt).update(password).digest("hex");

  const [user] = await db
    .insert(usersTable)
    .values({
      name,
      email,
      password: hashedPass,
      salt,
    })
    .returning({ id: usersTable.id });

  return res
    .status(201)
    .json({ message: `User with id: ${user.id} created successfully` });
}
