const advertiserDB = require("./advertismentPartner.DB.connection");

const AdvertismentPartnerModel = advertiserDB.model(
  "advertismentPartner",
  require("../../adPartner-service/models/adPartner.model")
);

module.exports = AdvertismentPartnerModel;
console.log(AdvertismentPartnerModel);