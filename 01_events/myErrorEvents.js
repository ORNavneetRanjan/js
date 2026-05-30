const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

eventEmitter.on("error", (err) => {
  console.log(`Error Occurred: ${err.message}`);
});

eventEmitter.emit("error", new Error("Something went wrong"));
