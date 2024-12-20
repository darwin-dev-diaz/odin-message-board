const asyncHandler = require("express-async-handler");
const store = require("store2");
const formatDate = require("../util/formateDate");
const db = require("../db/queries");

// if there is no username, redirect to register page
// display all messages
const getMessages = asyncHandler(async (req, res) => {
  if (!store("user")) return res.redirect("/");

  const messages = await db.getAllMessages();
  res.render("messages", { messages: messages });
});

// create a new message and add it to the message array
const sendMessage = asyncHandler(async (req, res) => {
  if (req.body.message === "") return res.redirect("back");

  await db.addMessage(
    store("user") || "User",
    req.body.message,
    formatDate(new Date()),
  );

  res.redirect("back");
});

module.exports = { getMessages, sendMessage };
