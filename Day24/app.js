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
let sequence = [];
let userSequence = [];
let level = 0;
let index = 0;
let score = 0;

const simonSays = () => {
  start = true;
  levelUp();
};

for (btn of document.querySelectorAll(".btn")) {
  btn.addEventListener("click", function () {
    btnPress(this);
  });
}

function levelUp() {
  userSequence = [];
  level++;
  document.querySelector("h2").innerText = `Level: ${level}`;
  //random button flash
  let randomBtn = Math.floor(Math.random() * 4);
  buttonFlash(document.querySelectorAll(".btn")[randomBtn], "flash");
  sequence.push(randomBtn);
  console.dir(sequence);
}

function buttonFlash(btn, flashType) {
  btn.classList.add(flashType);
  setTimeout(() => {
    btn.classList.remove(flashType);
  }, 250);
}

function btnPress(btn) {
  if (!start) return;
  buttonFlash(btn, "userFlash");
  let userBtnIndex = [...document.querySelectorAll(".btn")].indexOf(btn);
  userSequence.push(userBtnIndex);
  checkAns();
}

function checkAns() {
  if (userSequence[index] == sequence[index]) {
    index++;
    score++;
    if (index == level) {
      index = 0;
      setTimeout(levelUp, 800);
    }
  } else {
    start = false;
    document.querySelector("h2").innerHTML =
      `!! Game Over !!, Final Score:<b> ${score}</b>. Press any key to start`;

    let gameDiv = document.querySelector("#Game");
    gameDiv.style.backgroundColor = "red";
    setTimeout(() => {
      gameDiv.style.backgroundColor = "pink"; // original color
    }, 200);

    sequence = [];
    userSequence = [];
    level = 0;
    index = 0;
    score = 0;
  }
}

document.addEventListener("keypress", () => {
  if (!start) {
    start = true;
    simonSays();
  }
});
