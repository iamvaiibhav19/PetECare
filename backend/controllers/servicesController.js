const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const Service = require("../models/servicesModel");
//to create a new service

exports.newService = catchAsyncErrors(async (req, res, next) => {
  const { title, minDescription, description, image, price, options } =
    req.body;

  const service = await Service.create({
    title,
    minDescription,
    description,
    image,
    price,
    options,
  });

  res.status(201).json({
    status: "success",
    data: {
      service,
    },
  });
});

exports.deleteService = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  const service = await Service.findByIdAndDelete(id);
  if (!service) {
    return next(new ErrorHandler("Service not found", 404));
  }
  res.status(200).json({
    status: "success",
    message: "Service deleted successfully",
  });
});

exports.updateService = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  const { title, minDescription, description, image, price, options } =
    req.body;
  const service = await Service.findByIdAndUpdate(
    id,
    {
      title,
      minDescription,
      description,
      image,
      price,
      options,
    },
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );
  if (!service) {
    return next(new ErrorHandler("Service not found", 404));
  }
  res.status(200).json({
    status: "success",
    data: {
      service,
    },
    message: "Service updated successfully",
  });
});

//get all services
exports.getAllServices = catchAsyncErrors(async (req, res, next) => {
  const services = await Service.find();
  res.status(200).json({
    status: "success",
    data: {
      services,
    },
  });
});

//get single service
exports.getService = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  const service = await Service.findById(id);
  if (!service) {
    return next(new ErrorHandler("Service not found", 404));
  }
  res.status(200).json({
    status: "success",
    data: {
      service,
    },
  });
});

exports.getServiceByTitle = catchAsyncErrors(async (req, res, next) => {
  const { title } = req.params;
  const service = await Service.findOne({ title });
  if (!service) {
    return next(new ErrorHandler("Service not found", 404));
  }
  res.status(200).json({
    status: "success",
    data: {
      service,
    },
  });
});
