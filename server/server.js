const path = require("path");
const http = require("http");
const express = require("express");
const socketIO = require("socket.io");

const publicPath = path.join(__dirname, "/../public");
// console.log(__dirname + "/../public");
// console.log(path.join(__dirname, "/../public"));
const port = process.env.PORT || 2828;
let app = express();
let server = http.createServer(app);
let io = socketIO(server);

app.use(express.static(publicPath));

io.on("connection", socket => {
  console.log("User konek ke server");

  socket.on("disconnect", () => {
    console.log("User konek ke putus");
  });
});

server.listen(port, () => {
  console.log(`Server on port ${port}`);
});
