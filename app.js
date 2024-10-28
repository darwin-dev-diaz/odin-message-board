const express = require("express");
const path = require("node:path");

const app = express();
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const testRoute = require("./routes/test");

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

app.use("/test", testRoute);

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
