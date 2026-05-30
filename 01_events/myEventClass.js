const EventEmitter = require("events");

class Event extends EventEmitter {
  sendMessage(msg) {
    console.log(`Message sent: ${msg}`);
    this.emit("messageRecieved", msg);
  }
}

const event = new Event();

event.on("messageRecieved", (msg) => {
  console.log(`New Message: ${msg}`);
});

event.sendMessage("Navneet");
