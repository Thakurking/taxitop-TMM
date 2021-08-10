const CampaignModel = require("../../../Database/Campaign.Service.DB/campaignSchema");

exports.suggestMedia = async (req, res) => {
  const user_id = req.user;
  const findCampaign = await CampaignModel.findOne({ Owner: user_id });
};
