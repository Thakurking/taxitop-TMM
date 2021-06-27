const advertiserDB = require("./advertismentPartner.DB.connection");

const AdvertismentPartnerOTPModel = advertiserDB.model(
  "advertismentPartnerOTP",
  require("../../adPartner-service/models/adPartnerOTP.model")
);

module.exports = AdvertismentPartnerOTPModel;
console.log(AdvertismentPartnerOTPModel);
