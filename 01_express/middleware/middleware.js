const fs = require("node:fs");

exports.middleware = function (req, res, next) {
  fs.writeFileSync("../logs.txt", `${req.method} ${Date.now()}\n`);
  next();
};
