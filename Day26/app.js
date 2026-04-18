async function greet() {
  let loveScore = Math.floor(Math.random() * 10 + 1);
  console.log(loveScore);
  if (loveScore > 7) {
    return "True love";
  } else {
    throw "Dokhebaj mc";
  }
}

/*greet()
  .then((result) => console.log(`Promise resolved: ${result}`))
  .catch((result) => console.log(`Promise rejected: ${result}`));
*/

const getNum = async () => {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      let num = Math.floor(Math.random() * 10) + 1;
      console.log(num);
      if (num > 7) resolve();
      else reject();
    }, 1000),
  );
};

async function generateNum() {
  await getNum().catch(() => {
    console.log("less than 7");
  });
  await getNum().catch(() => {
    console.log("less than 7");
  });
  await getNum().catch(() => {
    console.log("less than 7");
  });
  await getNum().catch(() => {
    console.log("less than 7");
  });
  getNum().catch(() => {
    console.log("less than 7");
  });
}

// generateNum()
//   .then(() => console.log("Function completed"))
//   .catch(() => console.log("This is done"));

async function colorChange(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.querySelector("h1").style.color = color;
      resolve("Color changed");
    }, delay);
  });
}

const change = async () => {
  try {
    await colorChange("red", 1000);
    await colorChange("blue", 1000);
    await colorChange("orange", 1000);
    getNum().catch(() => reject);
    colorChange("green", 1000);
  } catch (err) {
    console.log("changing color failed");
  }
};

let jsonRes = "";

let url = "https://catfact.ninja/fact";

fetch(url)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));

const getFacts = async () => {
  try {
    let res = await fetch(url);
    console.log("res: " + res);
    let data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

getFacts();
