const AdvertismentPartnerModel = require("../../../Database/AdvertismentPartner.Service.DB/advertismentPartnerSchema");
const AdvertismentPartnerOTPModel = require("../../../Database/AdvertismentPartner.Service.DB/advertismentpartnerOTPSchema");

const { mongooseErrorHandler } = require("../../../Database/Error/DB.Error");

const nodemailer = require("nodemailer");

exports.advertismentPartnerRegister = async (req, res) => {
  const { Email, Password, OrganisationName, ServiceProvider, Address, Phone } =
    req.body;
  console.log(req.body);
  try {
    const Advertiser = await AdvertismentPartnerModel.create({
      Email,
      Password,
      OrganisationName,
      ServiceProvider,
      Address,
      Phone,
    });
    const OTP = await Math.floor(1000 + Math.random() * 9000);
    console.log(OTP);
    const AdvertismentPartnerOTP = await AdvertismentPartnerOTPModel.create({
      OTP: OTP,
      userID: Advertiser._id,
    });
    if (!AdvertismentPartnerOTP || !Advertiser)
      return res.json({ message: "Please Try Again", status: false });
    const mailOption = {
      from: process.env.user,
      to: Email,
      subject: `TaxiTop Advertisement Partner Verification`,
      html: `<h1>Account Verification</h1><br><hr><p>Please click to the link below to activate your account</p>
      <br><button><a href="http://localhost:5002/advertiserPartner/verify-advertiser-OTP/${OTP}/${Advertiser._id}">Activate</a></button>`,
    };
    let transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.user,
        pass: process.env.pass,
      },
    });
    const mail = transporter.sendMail(mailOption);
    if (!mail) {
      return res.json({
        message: "Something Went Wrong Please Try Again",
        status: false,
      });
    } else {
      return res.json({
        message: "We have Sent You OTP in Your Mail Please Verify",
        status: true,
        Advertiser: Advertiser,
        userID: Advertiser._id,
      });
    }
  } catch (error) {
    console.log(error);
    const errors = await mongooseErrorHandler(error);
    console.log(errors);
    return res.json(errors);
  }
};
