// const messageService = require("../modules/messages");
const store = require("store2");
const asyncHandler = require("express-async-handler");

const registerUser = asyncHandler(async (req, res) => {
  res.render("register");
});

const createUser = asyncHandler(async (req, res) => {
  // if the user didn't enter a username, then return to register page
  if (req.body.user.trim() === "") return res.render("register");
  // store user name and go to messages page 
  store.clear();
  store("user", req.body.user);
  res.redirect("/messages");
  res.end();
});

module.exports = {
  registerUser,
  createUser,
};
