const AdminModel = require("../../../Database/Admin.Service.DB/adminSchema");
const { mongooseErrorHandler } = require("../../../Database/Error/DB.Error");

exports.changePassword = async (req, res) => {
  try {
    const Password = req.params.Password;
    const Email = req.params.Email;
    if (!Password || !Email) {
      return res.json({
        message: "Please Enter Email And Password Details",
        status: false,
      });
    }
    const changePassword = await AdminModel.updateOne(
      { Email: Email },
      { $set: { Password: Password } }
    );
    if(changePassword){
      return res.json({ message: "Password Changed", status: true });
    }
    console.log(changePassword);
  } catch (error) {
    console.log(error);
    const errors = await mongooseErrorHandler(error);
    return res.json(errors);
  }
};
