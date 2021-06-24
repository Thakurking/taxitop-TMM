const MediaPartnerModel = require("../../../Database/MediaPartner.Service.DB/mediaPartnerSchema");

exports.mediaPartnerRegister = async (req, res) => {
  const { Email, Password, BusinessName, ConcernedPersonName } = req.body;
  try {
    const mediaPartner = new MediaPartnerModel({
      Email: Email,
      Password: Password,
      BusinessName: BusinessName,
      ConcernedPersonName: ConcernedPersonName,
    });
    const saveMediaPartner = mediaPartner.save();
    console.log(saveMediaPartner);
  } catch (error) {
    console.log(error);
  }
};
