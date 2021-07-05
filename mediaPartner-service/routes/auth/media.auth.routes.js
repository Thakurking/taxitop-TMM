const express = require("express");

const mediaRouter = express.Router();

const mediaPartnerLoginController = require("../../controller/auth/mediaPartner.login.controller");
const mediaPartnerRegisterController = require("../../controller/auth/mediaPartner.register.controller");
const mediaPartnerOTPController = require("../../controller/auth/MediaPartnerOTPVerification");
const mediaPartnerForgotPassword = require("../../controller/auth/mediaPartner.forgotpassword.controller");

mediaRouter.post(
  "/media-partner-login",
  mediaPartnerLoginController.mediaPartnerLogin
);
mediaRouter.post(
  "/media-partner-register",
  mediaPartnerRegisterController.mediaPartnerRegister
);
mediaRouter.get(
  "/verify-media-OTP/:OTP/:userID",
  mediaPartnerOTPController.OTPVerification
);
mediaRouter.post("/change-password", mediaPartnerForgotPassword.forgotPassword);

module.exports = mediaRouter;
