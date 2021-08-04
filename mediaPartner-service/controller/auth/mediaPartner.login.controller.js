const jwt = require("jsonwebtoken");

const MediaPartnerModel = require("../../../Database/MediaPartner.Service.DB/mediaPartnerSchema");

exports.mediaPartnerLogin = async (req, res) => {
  try {
    console.log(req.body);
    const { Email, Password } = req.body;
    if (!Email || !Password) {
      return res.json({
        message: "Please Enter Email And Password",
        status: false,
      });
    }
    const mediaPartner = await MediaPartnerModel.findOne({ Email }).select(
      "+Password"
    );
    if (!mediaPartner) {
      return res.json({ message: "User Not Found", status: false });
    }
    const isPasswordVerified = await mediaPartner.passwordVerification(
      Password
    );
    if (!isPasswordVerified) {
      return res.json({ message: "Wrong Email And Password", status: false });
    }
    let payload = {};
    payload.isMediaPartner = true;
    payload.mediaPartner = mediaPartner._id;
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
      .cookie("user_id", mediaPartner._id)
      .json({ message: "Welcome Again", status: true, token });
  } catch (error) {
    console.log(error);
    return res.json({ message: "Internal Server Error", status: false });
  }
};
