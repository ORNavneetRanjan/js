import e from "express";
import router from "./Routes/user.routes.js";

const app = e();
app.use(e.json());
app.get("/", (req, res) =>
  res.status(200).json({ message: "Server is running" }),
);
app.use("/users", router);
const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server up and running on PORT ${PORT}`));
