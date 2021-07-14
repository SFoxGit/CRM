const router = require('express').Router();
const { User } = require("../../models");
const withAuth = require('../../utils/auth');

router.get("/", function (req, res, next) {
  res.status(200).send("test");
});

module.exports = router;