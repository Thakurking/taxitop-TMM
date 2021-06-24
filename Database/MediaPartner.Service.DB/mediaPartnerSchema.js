const mediaPartnerDB = require("./mediaPartner.DB.connection");

const MediaPartnerModel = mediaPartnerDB.model(
  "mediaPartner",
  require("../../mediaPartner-service/models/mediaPartner.model")
);
module.exports = MediaPartnerModel;
