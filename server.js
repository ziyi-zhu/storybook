const express = require("express");
const app = express();
const path = require("path");

app.use("/static", express.static(path.join(__dirname, "static")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(1337, () => {
  console.log("The server is up and running!");
});
