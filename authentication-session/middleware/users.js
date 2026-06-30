import { eq } from "drizzle-orm";
import db from "../db/index.js";
import { userSession, usersTable } from "../db/schema.js";
import jwt from "jsonwebtoken";

export async function getUser(req, res, next) {
  const tokenHeader = req.get("Authorization");

  if (!tokenHeader) {
    return next();
  }

  if (!tokenHeader.startsWith("Bearer ")) {
    return res.status(400).json({
      error: "Authorization header must start with 'Bearer '",
    });
  }

  const token = tokenHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    console.log(decoded);

    req.user = decoded;

    return next();
  } catch (err) {
    return next(); // or return res.status(401).json({ error: "Invalid token" });
  }
}
