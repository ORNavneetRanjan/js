function guessGame() {
  let maxNumber = prompt("Enter the maximum number you want to guess");
  let score = Math.ceil(maxNumber / 2);
  let number = Math.floor(Math.random() * maxNumber) + 1;
  while (score > 0) {
    let guess = prompt("Enter your guess");
    if (guess == number) {
      console.log(`You won with a score of ${score}`);
      break;
    } else if (guess > number) {
      console.log("Your guess is slightly higher");
    } else {
      console.log("Your score is slightly lower");
    }
    score--;
  }
  if (score == 0) {
    console.log(`Sorry you LOSSE, the number was ${number}`);
  }
}

function roolDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function higherOrder(req) {
  let odd = function (n) {
    return !(n % 2 == 0);
  };
  let even = function (n) {
    return n % 2 == 0;
  };
  if (req == "odd") {
    return odd;
  } else if (req == "even") {
    return even;
  } else {
    return -1;
  }
}

// const student = {
//   name: "navneet",
//   age: 21,
// };

// try {
//   console.log(a / 0);
// } catch (e) {
//   console.log("the error is " + e);
// }

// const func = (num1, num2) => {
//   let a = num1 - num2;
//   console.log(num1 + num2);
// };
// func(5, 5);

// const mult = (a, b) => a * b;
// console.log(mult(2, 3));

// setTimeout(() => console.log("navneet ranjan"), 4000);

// console.log("welcome ");

// let i = 0;
// let id = setInterval(() => console.log(`executing it ${i++} times`), 2000);
// setTimeout(() => {
//   console.log("Interval ended");
//   clearInterval(id);
// }, 10000);

const Student = {
  name: "Navneet",
  age: 21,
  read: function () {
    setTimeout(function () {
      console.log(this);
    }, 2000);
  },
  play: function () {
    setTimeout(() => {
      console.log(this.name);
    }, 3000);
  },
};

//const func = (n) => n * n;
// let i = 0;
// const id = setInterval(() => {
//   console.log(`Hello World ${i}`);
//   i++;
// }, 2000);
// setTimeout(() => {
//   clearInterval(id);
// }, 10000);

const arr = [
  {
    name: "Navneet",
    marks: 60,
    dis: "I am a good boy",
  },
  {
    name: "Navneet",
    marks: 40,
    dis: "I am not a good boy",
  },
  {
    name: "Navneet",
    marks: 90,
    dis: "I am a good girl",
  },
  {
    name: "Navneet",
    marks: 100,
    dis: "I am a bad boy",
  },
];

// arr.forEach((element) => {
//   console.log(element);
// });

// arr.forEach(function (element) {
//   console.log(element);
// });

// let double = arr.map((element) => {
//   return element * 0.1;
// });
// console.log(arr, double);

// let newArray = arr.map((ele) => {
//   ele["CGPA"] = ele.marks / 10;
//   return ele;
// });
// console.log(newArray);

// let even = arr.filter((ele) => ele % 2 == 0);
// console.log(even);

// let result = arr.filter(
//   (ele) => ele.name == "Takshay" || ele.dis.includes("good boy")
// );
// console.log(result);

// console.log(arr.every((ele) => ele.marks == 60));
// console.log(arr.some((ele) => ele.dis.includes("good boy")));

// let i = 0;
// console.log(
//   arr.reduce(
//     (result, element) => {
//       console.log(i++, result, element);
//       let newElement = element;
//       newElement.marks += result.marks;
//       return newElement;
//     },
//     {
//       name: "Takshay",
//       marks: 50,
//       dis: "I am sweet boy",
//     }
//   )
// );
// console.log("this is new array: ", arr);

// console.log(arr.every((ele) => ele.marks % 10 == 0));
// console.log(
//   arr.reduce((result, element) => {
//     if (result > element.marks) return element.marks;
//     return result;
//   }, 1000)
// );

// console.log(...arr);
// console.log(..."Navneet Ranjan");

// let odd = [1, 5, 3];
// let even = [2, 4, 6];
// let nums = [...odd, ...even];
// console.log(nums);

// function func(name, ...args) {
//   console.log(
//     name,
//     args.reduce((sum, el) => sum + el)
//   );
// }
// func("Navneet", 1, 2, 3, 4, 5, 8);

let [first, second, third] = arr;
console.log(first, second, third);
let [fourth, fifth, ...others] = arr;
console.log(fourth, fifth, others);
console.log(typeof others);
