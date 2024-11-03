const express = require("express");
const path = require("node:path");
const app = express();

//  view stuff
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

// const testRoute = require("./routes/test");
const homeRoute = require("./routes/homepage");
const newMessageRoute = require("./routes/newMessage");
const welcomeRoute = require("./routes/welcomePage");

const messageService = require("./modules/messages");

app.use("/", welcomeRoute);
app.use("/messages", homeRoute);
app.use("/new", newMessageRoute);

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
