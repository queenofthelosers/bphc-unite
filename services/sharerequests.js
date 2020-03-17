const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Post = require("../models/sharingRequests");
const passport = require("passport");

router.route("/request").post((req, res) => {
  const newRequest = new Post({
      requestor: req.body.requestor,
      requestee: req.body.requestee,
      msg: req.body.message,
      date: req.body.date,
      from: req.body.from,
      to: req.body.to
  });
  newRequest.save().then(post => res.json(post));
  console.log("Sharing Request sucessfully submitted");
});

module.exports = router;