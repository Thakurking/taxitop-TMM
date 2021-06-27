const MediaPartnerOTPModel = require("../../../Database/MediaPartner.Service.DB/mediaPartnerOTPSchema");
const MediaPartnerModel = require("../../../Database/MediaPartner.Service.DB/mediaPartnerSchema");

exports.OTPVerification = async (req, res) => {
  try {
    const { OTP, user_ID } = req.body;
    if (!OTP || !user_ID) {
      return res.json({ message: "Access Denied", status: false });
    }
    const isOTP = await MediaPartnerOTPModel.findOne({ OTP: OTP });
    if (isOTP) {
      if (isOTP.Status === "F") {
        const updateOTPStatus = await MediaPartnerOTPModel.updateOne(
          { OTP: OTP },
          { $set: { Status: "A" } }
        );
        const updateMediaPartner = await MediaPartnerModel.updateOne(
          { _id: user_ID },
          { $set: { Status: "A" } }
        );
        if (updateOTPStatus && updateMediaPartner) {
          return res.json({ message: "Your Account Verified" });
        }
      }
      if (isOTP.Status === "A") {
        return res.json({
          message: "Your Account Already Verified",
          status: false,
        });
      }
    }
  } catch (error) {
    console.log(error);
    return res.json({ message: "Internal Server Error", status: false });
  }
};
