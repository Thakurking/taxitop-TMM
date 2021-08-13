const NRP = require("node-redis-pubsub");

const AdvertismentPartnerModel = require("../../../Database/AdvertismentPartner.Service.DB/advertismentPartnerSchema");

exports.bookMedia = async (req, res) => {
  if (req.adPartner && req.isAdPartner) {
    try {
      const adData = req.body;
      const adPartner = await AdvertismentPartnerModel.findOne({
        _id: req.adPartner,
      });
      
    } catch (error) {}
  }
};
