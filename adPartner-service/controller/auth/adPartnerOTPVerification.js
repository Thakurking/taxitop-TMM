const AdvertismentPartnerOTPModel = require("../../../Database/AdvertismentPartner.Service.DB/advertismentpartnerOTPSchema");
const AdvertismentPartnerModel = require("../../../Database/AdvertismentPartner.Service.DB/advertismentPartnerSchema");

module.exports = async (req, res) => {
  try {
    const { OTP, userID } = req.body;
    if (!OTP || !userID) {
      return res.json({ message: "Access Denied", status: false });
    }
    const isOTP = await AdvertismentPartnerOTPModel.findOne({ OTP: OTP });
    if (isOTP) {
      if (isOTP.Status === "F") {
        const updateOTPStatus = await AdvertismentPartnerOTPModel.updateOne(
          { OTP: OTP },
          { $set: { Status: "A" } }
        );
        const updateAdvertismentPartner =
          await AdvertismentPartnerModel.updateOne(
            { _id: userID },
            { $set: { Status: "A" } }
          );
        if (updateOTPStatus && updateAdvertismentPartner) {
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
