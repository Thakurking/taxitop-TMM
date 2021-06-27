const mediaPartnerDB = require("./mediaPartner.DB.connection");

const MediaPartnerOTPModel = mediaPartnerDB.model(
  "mediaPartnerOTP",
  require("../../adPartner-service/models/adPartnerOTP.model")
);
module.exports = MediaPartnerOTPModel;
console.log(MediaPartnerOTPModel);
