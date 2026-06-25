import express from "express";

const app = express();
const PORT = 8000;

app.use(express.json());

const db = {};
const Email = new Set();

app.post("/signup", (req, res) => {
  const { name, email, password } = req.body;
  if (Email.has(email)) {
    return res.status(400).json(`User with email: ${email} already exits`);
  }

  const token = `${Date.now()}`;
  db[token] = { name, email, password };
  Email.add(email);
  console.log(db);
  return res.status(200).json({ status: "success", token });
});

app.get("/me", (req, res) => {
  const { token } = req.body;
  if (!token) return res.status(400).json({ message: "Bad Request" });

  if (!(token in db)) {
    return res.status(400).json({ message: "token galat hai" });
  }

  return res.status(200).json({ data: db[token] });
});

app.post("/private-data", (req, res) => {
  const { token } = req.body;
  if (!token) return res.status(400).json({ message: "Bad Request" });

  if (!(token in db)) {
    return res.status(400).json({ message: "token galat hai" });
  }

  return res.status(200).json({ data: db[token] });
});

app.listen(PORT, () => console.log(`Server is up and running on ${PORT}`));
