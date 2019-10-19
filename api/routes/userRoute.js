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
  User.create(user)
    .then(newUser => {
      res.status(201).json(newUser);
    })
    .catch(err => {
      res.status(500).json({ message: "failed to create new user", err });
    });
});

router.delete("/:id", (req, res) => {
  id = req.params.id;
  User.deleting(id)
    .then(user => {
      res.status(200).json({ message: "user deleted" });
    })
    .catch(err => {
      res.status(500).json({ message: "failed to create new user", err });
    });
});

module.exports = router;
