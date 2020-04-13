const express = require("express");
const router = express.Router();
const Post = require("../models/CarPool");

router.route("/request").post((req, res) => {
  const newReq = new Post({
    id: req.body.id,
    members: [req.body.member1, req.body.member2],
    date: req.body.date,
    to: req.body.to,
    from: req.body.from
  });
  newReq.save().then(post => res.json(post));
  console.log("Request sucessfully submitted CarPool");
});

module.exports = router;
