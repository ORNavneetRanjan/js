function one() {
  return 1;
}

function two() {
  return one() + one();
}

function three() {
  return two() + one();
}

console.log(three());
setTimeout(() => {
  //console.log("first");
}, 2000);

console.log("second");

let h1 = document.querySelector("h1");

function changeColor(color, delay, nextColorChange) {
  setTimeout(() => {
    h1.style.color = color;
    if (nextColorChange) nextColorChange();
  }, delay);
}

changeColor("red", 100, () => {
  changeColor("yellow", 100, () => {
    changeColor("green", 100, () => {
      changeColor("blue", 100, () => {
        changeColor("orange", 100);
      });
    });
  });
});

setTimeout(() => {
  //console.log("Step 1");
  setTimeout(() => {
    //console.log("Step 2");
    setTimeout(() => {
      //console.log("Step 3");
    }, 1000);
  }, 1000);
}, 1000);

function saveToDb(data, success, failure) {
  let internetSpeed = Math.floor(Math.random() * 10) + 1;
  if (internetSpeed > 4) {
    success(data);
  } else {
    failure(data);
  }
}

saveToDb(
  "I _ u",
  () => {
    console.log("Your data are saved");
    saveToDb(
      "new data",
      () => {
        console.log("Success2: data2 saved");
        saveToDb(
          "thrid level",
          () => {
            console.log("Success3: data3 saved");
          },
          () => {
            console.log("Failure3: weak connection");
          },
        );
      },
      () => {
        console.log("Failure2: weak connection");
      },
    );
  },
  () => {
    console.log("Your data are saved");
  },
);

function saveData(data) {
  return new Promise((success, failure) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
      success("Your data is saved");
    } else {
      failure("Your Internet is slow");
    }
  });
}

saveData("I _ U")
  .then((result) => {
    console.log(result);
    console.log("Saying Truth");
    return saveData("Janhvi");
  })
  .then((result) => {
    console.log(result);
    console.log("Match made in haven");
  })
  .catch((error) => {
    console.log(error);
    console.log("Promise rejected");
  });

function changeColorAgain(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.querySelector("h1").style.color = color;
      resolve("color changed");
    }, delay);
  });
}

changeColorAgain("red", 1000)
  .then((result) => {
    console.log(result);
    return changeColorAgain("green", 1000);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((result) => console.log(result));
