const express = require("express");
const {
  addNewVaccine,
  getVaccines,
} = require("../controllers/VaccineController");

const router = express.Router();

router.route("/addNewVaccine").post(addNewVaccine);
router.route("/getVaccines").get(getVaccines);
module.exports = router;
