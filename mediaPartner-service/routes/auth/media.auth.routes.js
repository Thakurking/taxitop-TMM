const express = require("express");

const mediaRouter = express.Router();

const mediaPartnerLoginController = require("../../controller/auth/mediaPartner.login.controller");
const mediaPartnerRegisterController = require("../../controller/auth/mediaPartner.register.controller");

mediaRouter.post(
  "/media-partner-login",
  mediaPartnerLoginController.mediaPartnerLogin
);
mediaRouter.post(
  "/media-partner-register",
  mediaPartnerRegisterController.mediaPartnerRegister
);
module.exports = mediaRouter;
