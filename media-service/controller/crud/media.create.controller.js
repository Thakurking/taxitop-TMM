const MediaModel = require("../../../Database/Media.Service.DB/mediaSchema");
const { mongooseErrorHandler } = require("../../../Database/Error/DB.Error");

exports.mediaCreate = async (req, res) => {
  const mediaData = req.body;
  try {
    // console.log(mediaData);
    const saveMedia = await MediaModel.create(mediaData);
    console.log(saveMedia);
    if (saveMedia) {
      return res.json({
        message: "Your Media Saved Successfully",
        status: true,
      });
    }
    /**
     * media owner reference to mediaPartner model example
     */
    // const findMediaOwner = await MediaModel.findOne({
    //   _id: "610a461accffc3277e07aa05",
    // }).populate("Owner", "Name Email", AdminModel);
    // console.log(findMediaOwner.Owner);
    // const findMedia = await MediaModel.findOne({
    //   _id: findMediaOwner.Owner.Media,
    // });
    // console.log(findMedia);
  } catch (error) {
    console.log(error);
    console.log(error.errors);
    const errors = await mongooseErrorHandler(error);
    if (errors) {
      return res.json({ errors });
    } else {
      return res.json({ message: "Internal Server Error", status: false });
    }
  }
};
