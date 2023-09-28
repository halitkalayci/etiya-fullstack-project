const http = require("http");
const express = require("express");
const socketio = require("socket.io");

const app = express();

const server = http.createServer(app);

const io = new socketio.Server(server);

app.get('/', (req, res) => {
  res.send("Hello World");
})

io.on('connection', (socket) => {
  // handshake
  console.log("a user connected")
})

app.get('/products', (req, res) => {
  res.send([1, 2, 3, 4])
})

server.listen(9000);

