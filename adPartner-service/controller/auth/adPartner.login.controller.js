const AdvertismentPartnerModel = require("../../../Database/AdvertismentPartner.Service.DB/advertismentPartnerSchema");
const { mongooseErrorHandler } = require("../../../Database/Error/DB.Error");

exports.advertismentPartnerLogin = async (req, res) => {
    const { Email, Password } = req.body;
};
