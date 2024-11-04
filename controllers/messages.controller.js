const messageService = require("../modules/messages");
const asyncHandler = require("express-async-handler");
const store = require("store2");

// if there is no username, redirect to sign in page
// display all messages
const getMessages = asyncHandler(async (req, res) => {
  if (!store("user")) return res.redirect("/");

  res.render("messages", { messages: messageService.getMessages() });
});

// create a new message and add it to the message array
const sendMessages = asyncHandler(async () => {
  messageService.addMessage();
});

module.exports = { getMessages };
