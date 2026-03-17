let arr = document.getElementsByClassName("oldImg");
for (let i = 0; i < arr.length; i++) {
  arr[i].src =
    "https://plus.unsplash.com/premium_photo-1687880575898-5d7f91d03621?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3BpZGVyfGVufDB8fDB8fHww";
}

const cssString = `
    width: 200px;
    height: 100px;
    color: blue;
    padding: 10px;
    text-decoration: none;
  
`;
let element = document.getElementsByTagName("a");
for (let i = 0; i < element.length; i++) {
  element[i].style = "text-decoration:none; color: red;";
}

let heading = document.querySelector("h1");
// heading.innerHTML = `<u>${heading.innerText}</u>`;
// console.dir(document.querySelector("p").textContent);
// console.log("\n\n", document.querySelector("p").innerText);
// console.log("\n\n", document.querySelector("p").innerHTML);

let object = document.querySelector("img");
console.log(object.getAttribute("src"));
object.setAttribute(
  "src",
  "https://image.api.playstation.com/vulcan/ap/rnd/202011/0402/C784xeOFo2wViCf4m5bxgoeH.png",
);

let styleManipulation = document.querySelectorAll(".box a");
for (obj of styleManipulation) {
  obj.style.backgroundColor = "blue"; //converted into camel case
}
// console.log("start");
// console.log(heading.classList);
// heading.classList.add("green", "styleLine");
// console.log("add");
// console.log(heading.classList);
// console.log("remove");
// heading.classList.remove("green");
// console.log(heading.classList.contains("green"));
// console.log(heading.classList.toggle("green"));

console.log(heading.parentElement);
let ul = document.querySelector("ul");
// console.log(ul.children);
// console.log(ul.childElementCount);

// console.log(heading.parentElement);
// console.log(ul.children[0].nextElementSibling);
ul.children[0].nextElementSibling.style = "background-color: red";
ul.children[1].previousElementSibling.style =
  "text-decoration: underline green wavy 2px";

let ele = document.createElement("p");
ele.innerHTML = "<a href='#'>Hi my name is Navneet Ranjan</a>";
ele.classList.add("green", "styleLine");
let body = document.querySelector("body");
body.appendChild(ele);

let box = document.querySelector(".box");
box.appendChild(ele);

let btn = document.createElement("button");
btn.innerText = "this is me";
ele.append(btn, "hellow this is me Navneet");
ele.prepend(btn, "how are you");
console.log(box.children);

btn.onclick = function () {
  alert(`the button "${btn.innerText}" is clicked`);
};
box.removeChild(ele);

// event handelling
function handleClick(event) {
  alert(`The button "${event.target.innerHTML}" is clicked`);
}

function handleMouseEnter(event) {
  let str = event.target.innerHTML;
  console.log(str);
  event.target.innerText = "hello world";
}
let buttonList = document.querySelectorAll(".button button");
console.log(buttonList);
for (butt of buttonList) {
  // butt.onclick = handleClick;
  // butt.onmouseenter = handleMouseEnter;
  //butt.addEventListener("click", handleClick);
  butt.addEventListener("dblclick", handleMouseEnter);
}
let p = document.querySelector("p");
// p.addEventListener("click", function () {
//   console.log(this.innerText);
// });

function changeColor(event) {
  this.style.backgroundColor = "red";
  console.log(`Key code: ${event.code}`);
  console.log(`Key: ${event.key}`);
  console.log(event.target.value);
  console.log(event);
}

//p.addEventListener("click", changeColor);

let input = document.querySelector("input");
input.addEventListener("keydown", changeColor);

let form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event.target);
  alert(`The form is submitted 
      your email is ${event.target[0].value} 
    `);
});

let changeEvent = document.querySelector("#MoreEvent input[type='text']");
changeEvent.addEventListener("change", (event) => {
  console.log(`Change event: ${event.target.value}`);
});

let inputEvent = document.querySelector("#MoreEvent input[type='number']");
inputEvent.addEventListener("input", (event) => {
  console.log(`Input event: ${event.target.value}`);
});
