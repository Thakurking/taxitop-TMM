const CampaignModel = require("../../../Database/Campaign.Service.DB/campaignSchema");
const { mongooseErrorHandler } = require("../../../Database/Error/DB.Error");

exports.createCampaign = async (req, res) => {
  if (req.adPartner && req.admin) {
    const campaignData = req.body;
    try {
      campaignData.Owner = req.user;
      campaignData.onModel = req.role
      const saveCampaign = await CampaignModel.create({ campaignData });
      console.log(saveCampaign);
      if (saveCampaign) {
        return res.json({
          message: "Your Campaign Saved Sucessfully",
          status: true,
        });
      }
    } catch (error) {
      console.log(error);
      const errors = await mongooseErrorHandler(error);
      console.log(errors);
      if (errors) {
        return res.json({ errors });
      } else {
        return res.json({
          message: "Internal Server Error Please Try Again",
          status: false,
        });
      }
    }
  } else {
    return res.json({ message: "Access Denied", status: false });
  }
};
