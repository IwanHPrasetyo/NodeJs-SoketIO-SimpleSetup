const path = require("path");
const express = require("express");

const publicPath = path.join(__dirname, "/../public");
// console.log(__dirname + "/../public");
// console.log(path.join(__dirname, "/../public"));
const port = process.env.PORT || 2828;
var app = express();

app.use(express.static(publicPath));

app.listen(port, () => {
  console.log(`Server on port ${port}`);
});
