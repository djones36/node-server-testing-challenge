const express = require("express");
const server = express();

//Route Imports

server.use(express.json());

//Routes

//Deployment
server.get("/", (req, res) => {
  res.status(200).json("Successful Deployment");
});

module.exports = server;
