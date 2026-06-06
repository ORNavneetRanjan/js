const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.end("HomePage");
});

app.get("/contact-us", (req, res) => {
  res.end("You can contact me at my email address");
});

app.get("/tweets", (req, res) => {
  res.end("Here are your tweets");
});

app.post("/tweets", (req, res) => {
  res.status(201).end("Tweet Created Successfully");
});

app.listen(8000, () => console.log("Server is running at PORT 8000"));
