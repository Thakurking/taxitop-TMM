const AdminModel = require("../../../Database/Admin.Service.DB/adminSchema");
const { mongooseErrorHandler } = require("../../../Database/Error/DB.Error");

exports.adminRegister = async (req, res) => {
  const Email = req.params.Email;
  const Password = req.params.Password;
  try {
    const saveAdmin = await AdminModel.create({
      Email: Email,
      Password: Password,
    });
    if (saveAdmin) {
      return res.json({ message: "Admin Registered", status: true });
    }
  } catch (error) {
    console.log(error);
    const errors = await mongooseErrorHandler(error);
    console.log(errors);
    return res.json(errors);
  }
};
