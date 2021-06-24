const express = require("express")
const advertiserRouter = express.Router();

const advertiserPartnerController = require("../../controller/auth/adPartner.register.controller");

advertiserRouter.post(
  "/advertiserRegister",
  advertiserPartnerController.advertismentPartnerRegister
);

module.exports = advertiserRouter;