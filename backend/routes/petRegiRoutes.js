const express = require("express");

const {
  newRegistration,
  getPets,
} = require("../controllers/petRegiControlller");

const router = express.Router();

router.route("/registerPet").post(newRegistration);
router.route("/getPets").get(getPets);
module.exports = router;
