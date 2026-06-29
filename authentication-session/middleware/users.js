import { eq } from "drizzle-orm";
import db from "../db/index.js";
import { userSession, usersTable } from "../db/schema.js";

export async function getUser(req, res, next) {
  const sessionId = req.headers["session-id"];

  if (!sessionId) return next();
  const [user] = await db
    .select({
      id: userSession.id,
      userId: userSession.userId,
      name: usersTable.name,
      email: usersTable.email,
    })
    .from(userSession)
    .rightJoin(usersTable, eq(userSession.userId, usersTable.id))
    .where(eq(userSession.id, sessionId));

  console.log(`user: ${user.name}`);

  if (!user) return next();
  req.user = user;
  next();
}
