const http = require("node:http");

const server = http.createServer((req, res) => {
  console.log(req.method, req.url);

  res.writeHead(200);
  res.end("Thanks for visiting my server");
});

server.listen(8000, () => {
  console.log("Http server is up and running on port 8000");
});
