const advertismentPartnerDB = require("./advertismentPartner.DB.connection");

const advertismentPartnerModel = advertismentPartnerDB.model(
  "advertismentPartner",
  require("")
);

module.exports = advertismentPartnerModel;
