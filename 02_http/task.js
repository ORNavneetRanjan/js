const http = require("node:http");
const fileSystem = require("node:fs");

fileSystem.writeFileSync("log.txt", "Server Started \n");

const server = http.createServer((req, res) => {
  fileSystem.appendFileSync(
    "log.txt",
    `${new Date().toISOString()} ${req.url}\n`,
  );

  console.log(req.url);
  switch (req.url) {
    case "/":
      return res.end("Hello");

    case "/contact-us":
      return res.end("{ Email: kumar@gmail.com, Contact: 994232123 }");

    case "/tweet":
      if (req.method == "POST") {
        return res.end("This is done");
      } else if (req.method == "GET") {
        return res.end("Here are all the tweets");
      }

    default:
      res.statusCode = 404;
      return res.end("You may be lost bro");
  }
});

server.listen(8000, () => {
  console.log("Server is up and running on port 8000");
});
