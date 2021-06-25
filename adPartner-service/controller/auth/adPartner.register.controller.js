const AdvertismentPartnerModel = require("../../../Database/AdvertismentPartner.Service.DB/advertismentPartnerSchema");
const { mongooseErrorHandler } = require("../../../Database/Error/DB.Error");

exports.advertismentPartnerRegister = async (req, res) => {
  const { Email, Password, OrganisationName, ServiceProvider, Address } =
    req.body;
  console.log(req.body);
  try {
    const Advertiser = await AdvertismentPartnerModel.create({
      Email,
      Password,
      OrganisationName,
      ServiceProvider,
      Address,
    });
    console.log(Advertiser);
    return res.json({
      Message: "Account Created Successfully",
      status: true,
      Advertiser: Advertiser,
    });
  } catch (error) {
    console.log(error);
    const errors = await mongooseErrorHandler(error);
    console.log(errors);
    return res.json(errors);
  }
};
