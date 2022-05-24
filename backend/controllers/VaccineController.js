const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const Vaccine = require("../models/Vaccines");

exports.addNewVaccine = catchAsyncErrors(async (req, res, next) => {
  const { VaccineName, VaccineDescription, GivenTo } = req.body;
  const vaccine = await Vaccine.create({
    VaccineName,
    VaccineDescription,
    GivenTo,
  });
  res.status(201).json({
    status: "success",
    data: {
      vaccine,
    },
  });
});

exports.getVaccines = catchAsyncErrors(async (req, res, next) => {
  const vaccines = await Vaccine.find();
  res.status(200).json({
    status: "success",
    data: {
      vaccines,
    },
  });
});
