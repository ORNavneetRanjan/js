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
let dogApi = "https://dog.ceo/api/breeds/image/random";

fetch(url)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    // console.log(data);
  })
  .catch((err) => console.log(err));

const getFacts = async () => {
  try {
    let res = await fetch(url);
    console.log("res: " + res);
    let data = await res.json();
    console.log(data.fact);
  } catch (err) {
    console.log(err);
  }
};

async function axiosFetch() {
  try {
    let res = await axios.get(url);
    let p = document.querySelector("p");
    p.innerText = res.data.fact;
  } catch (error) {
    document.querySelector("p").innerText = "Some Error occured";
    console.log(error);
  }
}

document
  .querySelector("#getFact")
  .addEventListener("click", () => axiosFetch());

async function getDogImage() {
  try {
    let res = await axios.get(dogApi);
    let img = document.querySelector("img");
    img.src = res.data.message;
  } catch (err) {
    console.error(err);
  }
}

document
  .querySelector("#getDog")
  .addEventListener("click", () => getDogImage());

// Headers

const jokesURL = "https://icanhazdadjoke.com/";
const jokeFunc = async (resType) => {
  try {
    console.log("first call");
    const config = {
      headers: {
        Accept: `application/${resType}`,
      },
    };
    let res = await axios.get(jokesURL, config);
    console.log(res.data);
  } catch (err) {
    console.log(err);
  }
};

// jokeFunc("JSON");
// jokeFunc("html");

// Query

const url3 = "http://universities.hipolabs.com/search?country=";

const getCollageByCountry = async () => {
  try {
    let country = document.querySelector("#countryInput").value;
    let res = await axios.get(url3 + country);
    display(res.data);
    return res.data;
  } catch (err) {
    console.error(err);
    return [];
  }
};

const getCollageByState = async () => {
  try {
    let country = document.querySelector("#countryInput").value;
    let state = document.querySelector("#stateInput").value;
    let res = await axios.get(url3 + country);
    let data = res.data;
    let filtered = data.filter((col) => col["state-province"] === state);
    display(filtered);
    return filtered;
  } catch (err) {
    console.error(err);
    return [];
  }
};

const display = (colArr) => {
  let ul = document.querySelector("#collageData");
  ul.innerHTML = "";
  for (let col of colArr) {
    let li = document.createElement("li");
    li.innerText = col.name;
    ul.append(li);
  }
};

document
  .querySelector("#getCollageCountry")
  .addEventListener("click", () => getCollageByCountry());

document
  .querySelector("#getCollageState")
  .addEventListener("click", () => getCollageByState());
