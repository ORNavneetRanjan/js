const express = require("express");
const { error } = require("node:console");

const app = express();

const users = [
  { id: 1, name: "Book One", role: "Author ONe" },
  { id: 2, name: "Book two", role: "Author two" },
];

app.use(express.json());

app.use("/", (req, res, next) => {
  console.log(req.method, Date.now());
  next();
});

app.use(
  "/user/:id",
  (req, res, next) => {
    const id = parseInt(req.params.id);
    if (isNaN(id))
      return res.status(400).json({ error: `May be you are lost bro` });
    next();
  },
  (req, res, next) => {
    const id = parseInt(req.params.id);
    if (id <= 0 || id > users.length)
      return res
        .status(404)
        .json({ error: `User with id: ${id} does not exits` });
    next();
  },
);

app.get("/", (req, res) => res.json({ users }));

app.get("/user/:id", (req, res) => {
  const id = parseInt(req.params.id);
  return res.json({ "user:": users[users.findIndex((e) => e.id === id)] });
});

app.listen(8000, () => console.log(`The server is up and running`));
