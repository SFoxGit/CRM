const router = require('express').Router();
const { User } = require("../../models");
const withAuth = require('../../utils/auth');

router.get("/", function (req, res, next) {
  res.json(req.session);
});

module.exports = router;