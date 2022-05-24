const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
var nodemailer = require("nodemailer");
const Contact = require("../models/contactModel");

var transporter = nodemailer.createTransport({
  // use custom service
  service: "Gmail",
  auth: {
    user: "contact.vaibhavmagar",
    pass: "Vv@1901@",
  },
});

//new contact
exports.newContact = catchAsyncErrors(async (req, res, next) => {
  const { name, email, message } = req.body;

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

  var mailOptions = {
    from: "contact.vaibhavmagar@gmail.com",
    to: `${email}`,
    subject: "Contact Us - Team PetECare",
    html: `
                    <div>
                    <h4>Team PetECare</h4>
                    <p>
                        Hello <strong>${name}</strong>,
                    </p>
                    <p>
                        &nbsp; &nbsp; &nbsp;Thank you for contacting us. We will get back to you soon.
                    </p>
                    <p>
                        Regards,
                    </p>
                    <p>
                        Team PetECare.
                    </p>
                    </div>
                    `,
  };
  transporter
    .sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);

        res.status(200).json({
          success: false,
          message: "Email Failed To Sent",
          newContact,
        });
      } else {
        console.log("Email sent: " + info.response);
        res.status(200).json({
          success: true,
          message: "Email Sent successfully",
        });
      }
    })
    .catch((err) => {
      console.log(err);
      console.log("Email Not sent: ");

      res.status(200).json({
        success: false,
        message: "Email Failed To Sent here error",
      });
    });
});

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
