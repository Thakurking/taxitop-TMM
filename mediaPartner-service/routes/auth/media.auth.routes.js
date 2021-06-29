const express = require("express");

const mediaRouter = express.Router();

const mediaPartnerLoginController = require("../../controller/auth/mediaPartner.login.controller");
const mediaPartnerRegisterController = require("../../controller/auth/mediaPartner.register.controller");
const mediaPartnerOTPController = require("../../controller/auth/MediaPartnerOTPVerification");

mediaRouter.post(
  "/media-partner-login",
  mediaPartnerLoginController.mediaPartnerLogin
);
mediaRouter.post(
  "/media-partner-register",
  mediaPartnerRegisterController.mediaPartnerRegister
);
mediaRouter.get("/verify-OTP/:OTP/:userID", mediaPartnerOTPController.OTPVerification);

module.exports = mediaRouter;
