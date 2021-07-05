const express = require("express");
const advertiserRouter = express.Router();

const advertiserPartnerRegisterController = require("../../controller/auth/adPartner.register.controller");
const advertiserPartnerLoginController = require("../../controller/auth/adPartner.login.controller");
const advertiserPartnerOTPController = require("../../controller/auth/adPartnerOTPVerification");
const advertiserPartnerForgotPassword = require("../../controller/auth/adPartner.forgotPassword.controller");

advertiserRouter.post(
  "/advertiser-register",
  advertiserPartnerRegisterController.advertismentPartnerRegister
);
advertiserRouter.post(
  "/advertiser-login",
  advertiserPartnerLoginController.advertismentPartnerLogin
);
advertiserRouter.get(
  "/verify-advertiser-OTP/:OTP/:userID",
  advertiserPartnerOTPController.OTPVerification
);
advertiserRouter.put(
  "/change-password",
  advertiserPartnerForgotPassword.forgotPassword
);

module.exports = advertiserRouter;
