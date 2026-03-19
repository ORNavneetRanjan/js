let div = document.querySelector("div");
let ul = document.querySelector("ul");
let lis = document.querySelectorAll("li");

div.addEventListener("click", () => {
  console.log("div was clicked");
});

ul.addEventListener("click", (event) => {
  //   event.stopPropagation();
  console.log("ul was clicked");
});

for (li of lis) {
  li.addEventListener("click", (event) => {
    event.stopImmediatePropagation();
    console.log("li was clicked");
  });
}

let task = document.querySelector("input");
let button = document.querySelector("button");

button.addEventListener("click", () => {
  if (task.value === "") return;

  let tasklist = document.querySelector("#taskList");
  let li = document.createElement("li");

  let delBtn = document.createElement("button");
  delBtn.innerText = "delete";
  // delBtn.addEventListener("click", () => {
  //   li.remove();
  // });

  li.append(task.value, delBtn);
  task.value = "";
  tasklist.append(li);
});

task.addEventListener("keypress", (event) => {
  if (event.key === "Enter") button.click();
});

let taskList = document.querySelector("#taskList");
taskList.addEventListener("click", (event) => {
  if (event.target.nodeName === "BUTTON") {
    let listItem = event.target.parentElement;
    listItem.remove();
  }
});

let start = false;
const simonSays = () => {
  let level = 1;
  let sequence = [];
  let userSequence = [];
  while (start) {
    document.querySelector("h2").innerText = `Level: ${level}`;
    //random button flash
    let randomBtn = Math.floor(Math.random() * 4);
    buttonFlash(document.querySelectorAll(".btn")[randomBtn]);
    sequence.push(randomBtn);
    break;
  }
};

function buttonFlash(btn) {
  btn.classList.add("flash");
  setTimeout(() => {
    btn.classList.remove("flash");
  }, 250);
}

document.addEventListener("keypress", () => {
  if (!start) {
    start = true;
    simonSays();
  }
});
