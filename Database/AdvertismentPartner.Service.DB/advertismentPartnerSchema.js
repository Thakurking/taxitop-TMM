const advertiserDB = require("./advertismentPartner.DB.connection");

const AdvertismentPartnerModel = advertiserDB.model(
  "advertismentPartner",
  require("../../adPartner-service/models/adPartner.model")
);

console.log(AdvertismentPartnerModel);
module.exports = AdvertismentPartnerModel;