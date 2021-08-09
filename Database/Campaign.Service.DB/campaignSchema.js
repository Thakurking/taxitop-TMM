const campaignDB = require("./campaign.service.DB.Connection");

const CampaignModel = campaignDB.model(
  "campaign",
  require("../../campaign-service/models/campaign.model")
);

console.log(CampaignModel);
module.exports = CampaignModel;
