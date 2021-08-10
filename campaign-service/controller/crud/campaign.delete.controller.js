const CampaignModel = require("../../../Database/Campaign.Service.DB/campaignSchema");

exports.deleteCampaign = async (req, res) => {
  try {
    const { campaign_id } = req.body;
    const deleteCampaign = await CampaignModel.deleteOne({ _id: campaign_id });
    if (deleteCampaign) {
      return res.json({
        message: "Campaign Deleted Successfully",
        status: true,
      });
    }
  } catch (error) {
    console.log(error);
    return res.json({ message: "Internal Server Error", status: false });
  }
};
