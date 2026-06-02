const http = require("node:http");

const server = http.createServer((req, res) => {
  console.log(`Incoming request at [${Date.now()}]`);
  console.log(req.method);

  switch (req.url) {
    case "/":
      res.writeHead(200);
      return res.end("HomePage");
    case "/contact-us":
      res.writeHead(201);
      return res.end("Here is my number");
    case "/about":
      res.writeHead(301);
      return res.end("My name is Navneet");
    default:
      res.writeHead(404);
      return res.end("You may have been lost");
  }
});

server.listen(8000, () => {
  console.log("Server is running on PORT:8000");
});
