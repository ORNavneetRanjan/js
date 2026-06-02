const { Buffer } = require("buffer");

const buf = Buffer.alloc(4);
console.log(buf);

const buffer = Buffer.from("Hello Chai");
console.log(buffer);
console.log(buffer.toString());

const bufTwo = Buffer.allocUnsafe(10);
console.log(bufTwo);

console.log(buffer.toString("utf8", 0, 4));

buffer[0] = 0x43;
buffer[1] = 90;
console.log(buffer, buffer.toString());

const buf1 = Buffer.from("Navneet Ranjan");
const buf2 = Buffer.from("Kumar");
const merged = Buffer.concat([buf1, buf2]);
console.log(merged.toString());
console.log(merged.at(0));
