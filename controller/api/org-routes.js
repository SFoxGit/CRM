const router = require('express').Router();
const { Organization } = require("../../models");
const withAuth = require('../../utils/auth');

router.get("/", function (req, res) {
  res.status(200).send("test");
});

router.post("/", async (req, res) => {
  try {
    await Organization.create({
      orgname: req.body.orgname
    })
    const newOrg = await Organization.findOne({
      where: {
        orgname: req.body.orgname
      }
    })
    const formatOrg = await JSON.parse(JSON.stringify(newOrg))
    res.status(200).json(formatOrg.id)
  } catch {
    res.status(400).json(err)
  }
})

module.exports = router;