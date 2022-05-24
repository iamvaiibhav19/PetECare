const mongoose = require("mongoose");

const vaccinesSchema = new mongoose.Schema({
  VaccineName: {
    type: String,
    required: [true, "Please enter a VaccineName"],
  },
  VaccineDescription: {
    type: String,
    required: [true, "Please enter a VaccineDescription"],
  },
  GivenTo: {
    type: String,
    required: [true, "Please enter a GivenTo"],
  },
});

module.exports = mongoose.model("Vaccine", vaccinesSchema);
