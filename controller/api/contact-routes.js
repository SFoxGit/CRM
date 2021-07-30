const router = require('express').Router();
const { Contact } = require("../../models");
const withAuth = require('../../utils/auth');

router.get("/", async (req, res, next) => {
  try {
    const contacts = await Contact.findAll({
      where: {company: req.body.company}
    })
    const formatCust = await JSON.parse(JSON.stringify(contacts));
    res.status(200).json(formatCust);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const contact = await Contact.findOne({
      where: {id: req.params.id}
    })
    const formatCust = await JSON.parse(JSON.stringify(contact));
    res.status(200).json(formatCust);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    await Contact.create({
      name: req.body.name,
      phone: req.body.phone,
      title: req.body.title,
      company: req.body.company,
    })
    res.status(200).json("test")
  } catch (err) {
    res.status(500).json(err);
  }
})

// router.post("/", async (req, res) => {
//   try {

//   } catch (err) {

//   }
// })

module.exports = router;