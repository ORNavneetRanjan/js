import e from "express";
import {
  updateUserName,
  users,
  usersLogin,
  usersSignUp,
} from "../controllers/user.controller.js";

const router = e.Router();

router.get("/", users);
router.patch("/update", updateUserName);
router.post("/login", usersLogin);
router.post("/signup", usersSignUp);

export default router;
