const http = require("http");
const express = require("express");
const app = express();

const server = http.createServer(app);

app.get('/', (req, res) => {
  res.send("Hello World");
})

app.get('/products', (req, res) => {
  res.send([1, 2, 3, 4])
})

server.listen(9000);

