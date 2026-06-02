const ChatRoom = require("./chatRoom.js");

const chat = new ChatRoom();

chat.on("join", (user) => {
  console.log(`${user} has joined the chat`);
});

chat.on("message", (user, msg) => {
  console.log(`${user} is saying : ${msg}`);
});

chat.on("leave", (user) => {
  console.log(`${user} has left the chat`);
});

chat.sendMessage("Navneet", "Hello guys");

chat.join("Navneet");
chat.join("Adarsh");
chat.join("Takshay");

chat.sendMessage("Navneet", "Kya re ladka");
chat.sendMessage("Adarsh", "Backchodi maath kar");

chat.leave("Adarsh");

chat.sendMessage("Adarsh", "Aawaj aa raha hai ?");
chat.sendMessage("Takshay", "Adarsh Kaha gaya ?");
