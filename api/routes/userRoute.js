const express = require("express");

const router = express.Router();

const User = require("../models/userModel");

router.get("/", (req, res) => {
  User.findAll()
    .then(user => {
      res.status(200).json(user);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  User.create(user);
});

router.delete("/:id", (req, res) => {});
