const express = require("express");
require("dotenv").config();

const AdminRouter = express.Router();

const adminLoginController = require("../../controller/auth/admin.login.controller");
const adminRegisterController = require("../../controller/auth/admin.register.controller");
const changePassword = require("../../controller/auth/admin.ChangePassword.controller");

AdminRouter.post("/admin-login", adminLoginController.adminLogin);
AdminRouter.get(
  `/${process.env.AdminCreateRoute}/:Email/:Password`,
  adminRegisterController.adminRegister
);
AdminRouter.post(
  "/change-password/:Password/:Email",
  changePassword.changePassword
);

module.exports = AdminRouter;
