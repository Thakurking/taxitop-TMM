const MediaPartnerModel = require("../../../Database/MediaPartner.Service.DB/mediaPartnerSchema");
const MediaPartnerOTPModel = require("../../../Database/MediaPartner.Service.DB/mediaPartnerOTPSchema");
const { mongooseErrorHandler } = require("../../../Database/Error/DB.Error");

const transporter = require("../../../Helper/Nodemailer/nodemailer.Helper");

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
    console.log(MediaPartner);
    const OTP = await Math.floor(1000 + Math.random() * 9000);
    console.log(OTP);
    const MediaPartnerOTP = await MediaPartnerOTPModel.create({
      OTP: OTP,
      userID: MediaPartner._id,
    });
    console.log(MediaPartnerOTP);
    const mailOption = {
      from: process.env.user,
      to: Email,
      subject: `TaxiTop Media Partner Verification`,
      html: `<h1>Account Verification</h1><br><hr>
            <br><a>Your OTP is: ${OTP}</a>`,
    };
    const mail = await transporter.transporter.sendMail(mailOption);
    if (MediaPartner && MediaPartnerOTP && mail) {
      return res.json({
        message: "We have Sent You OTP in Your Mail Please Verify",
        status: true,
        MediaPartner: MediaPartner,
        userID: MediaPartner._id,
      });
    } else {
      return res.json({ message: "Internal Server Error", status: false });
    }
  } catch (error) {
    console.log(error);
    const errors = await mongooseErrorHandler(error);
    console.log(errors);
    return res.json(errors);
  }
};
