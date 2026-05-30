const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

eventEmitter.on("greet", (a, b) => {
  console.log(`This is event ${a + b}`);
});

eventEmitter.once("pushnotify", () => {
  console.log("This is event only run once");
});

eventEmitter.emit("greet", 2, 3);
eventEmitter.emit("pushnotify");
