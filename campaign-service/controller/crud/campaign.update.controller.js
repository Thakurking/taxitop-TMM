const CampaignModel = require("../../../Database/Campaign.Service.DB/campaignSchema");

const { mongooseErrorHandler } = require("../../../Database/Error/DB.Error");

exports.updateCampaign = async (req, res) => {
  try {
    const campaignData = req.body;
    console.log(campaignData);
    const updateCampaign = await CampaignModel.updateOne(
      { _id: updateCampaign._id },
      { $set: updateCampaign },
      { multi: true }
    );
    console.log(updateCampaign);
    if (updateCampaign) {
      return res.json({
        message: "Your Campaign Updated Successfully",
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
