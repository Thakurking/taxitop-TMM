const AdvertismentPartnerModel = require("../../../Database/AdvertismentPartner.Service.DB/advertismentPartnerSchema");

exports.advertismentPartnerRegister = async (req, res) => {
  res.send("hii");
  const { Email, Password, OrganisationName, ServiceProvider, Address } =
    req.body;
    console.log(req.body)
  try {
    const saveAdvertiser = await AdvertismentPartnerModel.create({
      Email,
      Password,
      OrganisationName,
      ServiceProvider,
      Address,
    });
    console.log(saveAdvertiser);
  } catch (error) {
    console.log(error);
  }
};
