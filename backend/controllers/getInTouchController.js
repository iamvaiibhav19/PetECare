var nodemailer = require("nodemailer");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const getInTouch = require("../models/getInTouch");

var transporter = nodemailer.createTransport({
  // use custom service
  service: "Gmail",
  auth: {
    user: "contact.vaibhavmagar",
    pass: "Vv@1901@",
  },
});

exports.sendMail = catchAsyncErrors(async (req, res, next) => {
  const email = req.body.email;

  res.status(200).json({
    status: "success",
    data: {
      message: "Email sent successfully",
    },
  });

  console.log(email);
  var mailOptions = {
    from: "contact.vaibhavmagar@gmail.com",
    to: `${email}`,
    subject: "Get In Touch - Team PetECare",
    html: `
			    <div>
                <h4>Get In Touch - Team PetECare</h4>
                <p>
                    Hi <strong>${email}</strong>,
                </p>
                <p>
                    &nbsp; &nbsp; &nbsp;&nbsp; Thank you for subscribing to PetECare. We will get back to you soon.
                </p>
                <p>
                    Regards,
                </p>
                <p>
                    Team PetECare
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

// router.route("/contact"),
//   (req, res) => {
//     const email = req.body.email;
//     var mailOptions = {
//       from: "contact.vaibhavmagar@gmail.com",
//       to: `${email}`,
//       subject: "Get In Touch - Team PetECare",
//       html: `
// 			    <div>
//                 <h1>Get In Touch - Team PetECare</h1>
//                 <p>
//                     Hi <strong>${email}</strong>,
//                 </p>
//                 <p>
//                     &nbsp; &nbsp; &nbsp;&nbsp; Thank you for subscribing to PetECare. We will get back to you soon.
//                 </p>
//                 <p>
//                     Regards,
//                 </p>
//                 <p>
//                     Team PetECare
//                 </p>
//                 </div>
//                 `,
//     };
//     transporter
//       .sendMail(mailOptions, function (error, info) {
//         if (error) {
//           console.log(error);

//           res.status(200).json({
//             success: false,
//             message: "Email Failed To Sent",
//             newContact,
//           });
//         } else {
//           console.log("Email sent: " + info.response);
//           res.status(200).json({
//             success: true,
//             message: "Email Sent successfully",
//           });
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//         console.log("Email Not sent: ");

//         res.status(200).json({
//           success: false,
//           message: "Email Failed To Sent here error",
//         });
//       });
//   };
