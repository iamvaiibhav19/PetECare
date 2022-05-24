const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
var nodemailer = require("nodemailer");
const PetRegistration = require("../models/Pet_Registration");

var transporter = nodemailer.createTransport({
  // use custom service
  service: "Gmail",
  auth: {
    user: "contact.vaibhavmagar",
    pass: "Vv@1901@",
  },
});

exports.newRegistration = catchAsyncErrors(async (req, res, next) => {
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    petName,
    petCategory,
    petWeight,
    petAge,
    petBreed,
    service,
    slot,
  } = req.body;

  const petRegistration = await PetRegistration.create({
    firstName,
    lastName,
    email,
    phoneNumber,
    petName,
    petCategory,
    petWeight,
    petAge,
    petBreed,
    service,
    slot,
  });

  const name = firstName + " " + lastName;

  res.status(201).json({
    status: "success",
    data: {
      petRegistration,
    },
  });

  var mailOptions = {
    from: "contact.vaibhavmagar@gmail.com",
    to: `${email}`,
    subject: "Registration Confirmation",
    html: `
			    <div>
                <h4>Registration - Team PetECare</h4>
                <p>
                    Hello <strong>${name}</strong>,
                </p>
                <p>
                    &nbsp; &nbsp; &nbsp;Thank you for registering your pet for ${service}. Your slot is booked for ${slot}.
                </p>
                <p>
                    &nbsp; &nbsp; &nbsp;See you soon at : PetECare, Veternary Clinic, Nashik - 422020.
                </>
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

exports.getPets = catchAsyncErrors(async (req, res, next) => {
  const petRegistration = await PetRegistration.find();
  res.status(200).json({
    status: "success",
    data: {
      petRegistration,
    },
  });
});
