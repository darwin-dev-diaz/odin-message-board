const express = require("express");

const app = express();

const testRoute = require("./routes/test");
app.use("/test", testRoute);

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
