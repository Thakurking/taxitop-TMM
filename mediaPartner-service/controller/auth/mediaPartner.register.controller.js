const nodemailer = require("nodemailer");

const MediaPartnerModel = require("../../../Database/MediaPartner.Service.DB/mediaPartnerSchema");
const MediaPartnerOTPModel = require("../../../Database/MediaPartner.Service.DB/mediaPartnerOTPSchema");
const { mongooseErrorHandler } = require("../../../Database/Error/DB.Error");

const transporter = require("../../../Helper/Nodemailer/nodemailer.Helper");

exports.mediaPartnerRegister = async (req, res) => {
  const { Email, Password, BusinessName, ConcernedPersonName, Phone } =
    req.body;
  try {
    const OTP = await Math.floor(1000 + Math.random() * 9000);
    console.log(OTP);
    const mailOption = {
      from: process.env.user,
      to: Email,
      subject: `TaxiTop Account Verification`,
      html: `<h1>Account Verification</h1><br><hr>
            <br><a>Your OTP is: ${OTP}</a>`,
    };
    const mail = await transporter.transporter.sendMail(mailOption);
    if (mail) {
      const MediaPartner = await MediaPartnerModel.create({
        Email,
        Password,
        BusinessName,
        ConcernedPersonName,
        Phone,
      });
      console.log(MediaPartner);
      const MediaPartnerOTP = await MediaPartnerOTPModel.create({
        OTP: OTP,
        user_ID: MediaPartner._id,
      });
      console.log(MediaPartnerOTP);
      if (MediaPartner && MediaPartnerOTP) {
        return res.json({
          message:
            "Please Verify Your Email We have Sent You an OTP in Your Email",
          status: true,
          MediaPartner: MediaPartner,
          user_ID: MediaPartner._id,
        });
      }
    }
  } catch (error) {
    console.log(error);
    const errors = await mongooseErrorHandler(error);
    console.log(errors);
    return res.json(errors);
  }
};
