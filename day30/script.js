// import { sum, pi } from "./math.js";

// console.log("this is script.js");

// function func(a, b) {
//   console.log(a + b);
// }

// console.log("calling function ");
// func(12, 124);

// for (let ele of process.argv) {
//   console.log(ele);
// }

// console.log(pi);
// console.log(sum(1, 2));

const { sum, pi, mul } = require("./math.js");
console.log(sum(1, 3) + pi + mul(1, 34));
