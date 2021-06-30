const AdminModel = require("../../../Database/Admin.Service.DB/adminSchema");

const jwt = require("jsonwebtoken");

exports.adminLogin = async (req, res) => {
  try {
    const { Email, Password } = req.body;
    console.log(Email, Password);
    if (!Email || !Password) {
      return res.json({ message: "Please Enter Email And Password" });
    }
    const admin = await AdminModel.findOne({ Email: Email }).select(
      "+Password"
    );
    console.log(admin);
    if (!admin) {
      return res.json({ message: "User Not Fond", status: false });
    }
    const isPasswordVerified = await admin.passwordVerification(Password);
    console.log(isPasswordVerified);
    if (!isPasswordVerified) {
      return res.json({ message: "Wrong Email Or Password", status: false });
    }
    let payload = {};
    payload.isAdmin = true;
    payload.admin = admin._id;
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
      .cookie("user_id", admin._id)
      .json({ message: "Welcome Admin", status: true });
  } catch (error) {
    console.log(error);
    return res.json({ message: "Internal Server Error", status: false });
  }
};
