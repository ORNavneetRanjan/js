function handleClick() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  let color = `(${red}, ${green}, ${blue})`;
  return color;
}

let button = document.querySelector("button");
button.addEventListener("click", function () {
  let color = handleClick();
  let heading = document.querySelector("h1");
  heading.innerText = `color = rgb${color}`;
  let div = document.querySelector("div");
  console.log(div);
  div.style.backgroundColor = `rgb${color}`;
  console.log("color updated");
});
