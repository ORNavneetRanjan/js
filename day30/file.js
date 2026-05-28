const fs = require("fs");

const content = fs.readFileSync("notes.txt", "utf-8");

fs.writeFileSync("copy.txt", "I want to write this");
fs.appendFileSync("copy.txt", "\n\nI am here", "utf-8");

console.log(fs.readFileSync("copy.txt", "utf-8"));

fs.mkdirSync("games/football/mancity", { recursive: true });

fs.rmdirSync("games", { recursive: true }, (err) => console.log(err));
// fs.rmdir("games/football");
// fs.rmdir("games");

fs.unlinkSync("copy.txt");
fs.unlinkSync("notes.txt");
