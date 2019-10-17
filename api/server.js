const express = require("express");
const server = express();

//Route Imports
const userRoute = require("../api/routes/userRoute");
server.use(express.json());

//Routes
server.use("/api/users", userRoute);
//Deployment
server.get("/", (req, res) => {
  res.status(200).json("Successful Deployment");
});

module.exports = server;
