const express = require("express");
const advertiserRouter = express.Router();

const advertiserPartnerRegisterController = require("../../controller/auth/adPartner.register.controller");
const advertiserPartnerLoginController = require("../../controller/auth/adPartner.login.controller");
const advertiserPartnerOTPController = require("../../controller/auth/adPartnerOTPVerification");

advertiserRouter.post(
  "/advertiser-register",
  advertiserPartnerRegisterController.advertismentPartnerRegister
);
advertiserRouter.post(
  "/advertiser-login",
  advertiserPartnerLoginController.advertismentPartnerLogin
);
advertiserRouter.get(
  "/verify-OTP/:OTP/:userID",
  advertiserPartnerOTPController.OTPVerification
);
module.exports = advertiserRouter;
