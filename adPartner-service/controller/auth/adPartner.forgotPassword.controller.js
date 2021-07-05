const AdvertismentPartnerModel = require("../../../Database/AdvertismentPartner.Service.DB/advertismentPartnerSchema");
const { mongooseErrorHandler } = require("../../../Database/Error/DB.Error");

exports.forgotPassword = async (req, res) => {
  try {
    const { Email, Password, confirmPassword } = req.body;
    if (!Email || !Password || !confirmPassword) {
      return res.json({ message: "Please Enter Credentials", status: false });
    }
    if (Password !== confirmPassword) {
      return res.json({ message: "Password Does Not Match", status: false });
    }
    const adPartner = await AdvertismentPartnerModel.findOne({ Email: Email });
    if (!adPartner) {
      return res.json({ message: "User Not Found", status: false });
    }
    if (adPartner.Status === "F") {
      return res.json({ message: "Please Verify Your Email", status: false });
    }
    const changePassword = await AdvertismentPartnerModel.updateOne(
      { Email: Email },
      { $set: { Password: Password } }
    );
    console.log(changePassword);
    if (changePassword) {
      return res.json({ message: "Password Changed", status: true });
    }
  } catch (error) {
    console.log(error);
    const errors = await mongooseErrorHandler(error);
    return res.json(errors);
  }
};
