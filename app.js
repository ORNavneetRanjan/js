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
  "https://image.api.playstation.com/vulcan/ap/rnd/202011/0402/C784xeOFo2wViCf4m5bxgoeH.png"
);

let styleManipulation = document.querySelectorAll(".box a");
for (obj of styleManipulation) {
  obj.style.backgroundColor = "blue"; //converted into camel case
}
console.log("start");
console.log(heading.classList);
heading.classList.add("green", "styleLine");
console.log("add");
console.log(heading.classList);
console.log("remove");
heading.classList.remove("green");
console.log(heading.classList.contains("green"));
console.log(heading.classList.toggle("green"));
