const EventEmitter = require("events");

class ChatRoom extends EventEmitter {
  constructor() {
    super();
    this.user = new Set();
  }

  join(user) {
    this.user.add(user);
    this.emit("join", user);
  }

  sendMessage(user, msg) {
    if (this.user.has(user)) {
      this.emit("message", user, msg);
    } else {
      console.log(`${user} is not in chat`);
    }
  }

  leave(user) {
    if (this.user.has(user)) {
      this.user.delete(user);
      this.emit("leave", user);
    } else {
      console.log(`${user} is not present`);
    }
  }
}

module.exports = ChatRoom;
