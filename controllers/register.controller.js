// const messageService = require("../modules/messages");
const store = require("store2");
const asyncHandler = require("express-async-handler");

const registerUser = asyncHandler(async (req, res) => {
  res.render("register");
});

const createUser = asyncHandler(async (req, res) => {
  if (req.body.user.trim() === "") return res.render("register");
  store.clear();
  store("user", req.body.user);
  res.redirect("/messages");
  res.end();
});

module.exports = {
  registerUser,
  createUser,
};
