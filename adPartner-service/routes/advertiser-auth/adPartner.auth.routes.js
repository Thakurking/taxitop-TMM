const express = require("express")
const advertiserRouter = express.Router();

const advertiserPartnerRegisterController = require("../../controller/auth/adPartner.register.controller");
const advertiserPartnerLoginController = require("../../controller/auth/adPartner.login.controller");

advertiserRouter.post(
  "/advertiser-register",
  advertiserPartnerRegisterController.advertismentPartnerRegister
);
advertiserRouter.post(
  "/advertiser-login",
  advertiserPartnerLoginController.advertismentPartnerLogin
);
module.exports = advertiserRouter;