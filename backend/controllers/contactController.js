const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const Contact = require("../models/contactModel");

//new contact
exports.newContact = catchAsyncErrors(async (req, res, next) => {
    const {
        name,
        email,
        message,
    } = req.body;
    
    const contact = await Contact.create({
        name,
        email,
        message,
    });
    
    res.status(201).json({
        status: "success",
        data: {
        contact,
        },
    });
    }
);

//get all contacts
exports.getAllContacts = catchAsyncErrors(async (req, res, next) => {
    const contacts = await Contact.find();
    res.status(200).json({
        status: "success",
        data: {
            contacts,
        },
    });
});

//dekeete contact
exports.deleteContact = catchAsyncErrors(async (req, res, next) => {
    const { id } = req.params;
    const contact = await Contact.findByIdAndDelete(id);
    if (!contact) {
        return next(new ErrorHandler("Contact not found", 404));
    }
    res.status(200).json({
        status: "success",
        message: "Contact deleted successfully",
    });
});

//get single contact
exports.getContact = catchAsyncErrors(async (req, res, next) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        return next(new ErrorHandler("Contact not found", 404));
    }
    res.status(200).json({
        status: "success",
        data: {
            contact,
        },
    });
});


