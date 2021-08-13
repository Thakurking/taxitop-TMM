const jwt = require("jsonwebtoken");

const AdvertismentPartnerModel = require("../../../Database/AdvertismentPartner.Service.DB/advertismentPartnerSchema");

exports.advertismentPartnerLogin = async (req, res) => {
  try {
    const { Email, Password } = req.body;
    console.log(Email, Password);
    if (!Email || !Password) {
      return res.json({
        message: "Please Provide Email and Password",
        status: false,
      });
    }
    const adPartner = await AdvertismentPartnerModel.findOne({ Email }).select(
      "+Password"
    );
    if (!adPartner) {
      return res.json({ message: "User Not Found", status: false });
    }
    const isPasswordVerified = await adPartner.passwordVerification(Password);
    if (!isPasswordVerified) {
      return res.json({ message: "Wrong Email Or Password", status: false });
    }
    let payload = {};
    payload.isAdPartner = true;
    payload.adPartner = adPartner._id;
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "8h",
    });
    if (!token) {
      return res.json({ message: "Token Not Created", status: false });
    }
    return res
      .cookie("token", token, {
        expires: new Date(Date.now() + 8 * 3600000),
        httpOnly: true,
      })
      .cookie("user_id", adPartner._id)
      .json({ message: "Welcome Again", status: true, token });
  } catch (error) {
    console.log(error);
    return res.json({ message: "Internal Server Error", status: false });
  }
};
