const express = require("express");
const path = require("node:path");
const app = express();

//  view stuff
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

const messageRoute = require("./routes/messages");
const registerRoute = require("./routes/register");

app.use("/", registerRoute);
app.use("/messages", messageRoute);

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
