const express = require("express");
require("dotenv").config();

const AdminRouter = express.Router();

const adminLoginController = require("../../controller/auth/admin.login.controller");
const adminRegisterController = require("../../controller/auth/admin.register.controller");

AdminRouter.post("/admin-login", adminLoginController.adminLogin);
AdminRouter.post(
  `/${process.env.AdminCreateRoute}`,
  adminRegisterController.adminRegister
);

module.exports = AdminRouter;
