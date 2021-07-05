const MediaPartnerModel = require("../../../Database/MediaPartner.Service.DB/mediaPartnerSchema");
const { mongooseErrorHandler } = require("../../../Database/Error/DB.Error");

exports.forgotPassword = async (req, res) => {
  try {
    const { Email, Password, confirmPassword } = req.body;
    if (!Email || !Password || !confirmPassword) {
      return res.json({ message: "Please Enter Credentials", status: false });
    }
    if (Password !== confirmPassword) {
      return res.json({ message: "Password Does Not Match" });
    }
    const mediaPartner = await MediaPartnerModel.findOne({ Email: Email });
    if (!mediaPartner) {
      return res.json({ message: "User Not Fund", status: false });
    }
    if (mediaPartner.Status === "F") {
      return res.json({ message: "Please Verify Your Email", status: false });
    }
    const changePassword = await MediaPartnerModel.updateOne(
      { Email: Email },
      { $set: { Password: Password } }
    );
    console.log(changePassword);
    if (changePassword) {
      return res.json({ message: "Your password Changed", status: true });
    }
  } catch (error) {
    console.log(error);
    const errors = await mongooseErrorHandler(error);
    return res.json(errors);
  }
};
