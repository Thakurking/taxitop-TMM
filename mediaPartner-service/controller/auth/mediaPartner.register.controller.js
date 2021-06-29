const MediaPartnerModel = require("../../../Database/MediaPartner.Service.DB/mediaPartnerSchema");
const MediaPartnerOTPModel = require("../../../Database/MediaPartner.Service.DB/mediaPartnerOTPSchema");
const { mongooseErrorHandler } = require("../../../Database/Error/DB.Error");

// const transporter = require("../../../Helper/Nodemailer/nodemailer.Helper");
const nodemailer = require("nodemailer");

exports.mediaPartnerRegister = async (req, res) => {
  const { Email, Password, BusinessName, ConcernedPersonName, Phone } =
    req.body;
  try {
    const MediaPartner = await MediaPartnerModel.create({
      Email,
      Password,
      BusinessName,
      ConcernedPersonName,
      Phone,
    });
    const OTP = await Math.floor(1000 + Math.random() * 9000);
    const MediaPartnerOTP = await MediaPartnerOTPModel.create({
      OTP: OTP,
      userID: MediaPartner._id,
    });
    if (!MediaPartner || !MediaPartnerOTP)
      return res.json({ message: "Please Try Again", status: false });
    const mailOption = {
      from: process.env.user,
      to: Email,
      subject: `TaxiTop Media Partner Verification`,
      html: `<h1>Account Verification</h1><br><hr><p>Please click to the link below to activate your account</p>
      <br><button><a href="http://localhost:5001/mediaPartner/verify-OTP/${OTP}/${MediaPartner._id}">Activate</a></button>`,
    };
    let transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.user,
        pass: process.env.pass,
      },
    });
    const mail = await transporter.sendMail(mailOption);
    if (!mail) {
      return res.json({
        message: "Something Went Wrong Please Try Again",
        status: false,
      });
    } else {
      return res.json({
        message: "We have Sent You OTP in Your Mail Please Verify",
        status: true,
        MediaPartner: MediaPartner,
        userID: MediaPartner._id,
      });
    }
  } catch (error) {
    console.log(error);
    const errors = await mongooseErrorHandler(error);
    console.log(errors);
    return res.json(errors);
  }
};
