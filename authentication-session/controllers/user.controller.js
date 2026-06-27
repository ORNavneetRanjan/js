import { eq } from "drizzle-orm";
import db from "../db/index..js";
import { userSession, usersTable } from "../db/schema.js";
import { randomBytes, createHmac } from "crypto";
export async function users(req, res) {
  const data = await db.select().from(usersTable);
  return res.json({ data: data });
}

export async function usersLogin(req, res) {
  const { email, password } = req.body;
  const isEmailExits = await db
    .select({
      id: usersTable.id,
      email: usersTable.email,
      salt: usersTable.salt,
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

  const [session] = await db
    .insert(userSession)
    .values({
      userId: isEmailExits[0].id,
    })
    .returning({ id: userSession.id });

  return res.json({ status: "success", sessionId: session.id });
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
