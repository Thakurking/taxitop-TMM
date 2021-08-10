const CampaignModel = require("../../../Database/Campaign.Service.DB/campaignSchema");
const { mongooseErrorHandler } = require("../../../Database/Error/DB.Error");

exports.deActivateCampaign = async (req, res) => {
  try {
    const campaign_id = req.body.campaign_id;
    const deActivateCampaign = await CampaignModel.updateOne(
      { _id: campaign_id },
      { $set: { Status: "F" } }
    );
    if (deActivateCampaign) {
      return res.json({
        message: "Campaign Deactivated Successfully",
        status: true,
      });
    }
  } catch (error) {
    console.log(error);
    const errors = await mongooseErrorHandler(error);
    if (errors) {
      return res.json({ errors, status: false });
    } else {
      return res.json({ message: "Internal Server Error", status: false });
    }
  }
};
