const MediaModel = require("../../../Database/Media.Service.DB/mediaSchema");
const { mongooseErrorHandler } = require("../../../Database/Error/DB.Error");

exports.deactivateMedia = async (req, res) => {
  const mediaID = req.body.mediaID;
  try {
    const deactiveMedia = await MediaModel.updateOne(
      { _id: mediaID },
      { $set: { Status: "D" } }
    );
    if (deactiveMedia) {
      return res.json({
        message: "Your Media Deactivated Successfully",
        status: true,
      });
    }
  } catch (error) {
    console.log(error);
    const errors = await mongooseErrorHandler(error);
    if (errors) {
      return res.json({ message: errors, status: false });
    } else {
      return res.json({ message: "Internal Server Error", status: false });
    }
  }
};
