const MediaModel = require("../../../Database/Media.Service.DB/mediaSchema");
const { mongooseErrorHandler } = require("../../../Database/Error/DB.Error");

exports.mediaCreate = async (req, res) => {
  const mediaData = req.body;
  try {
    // console.log(mediaData);
    const saveMedia = await MediaModel.create(mediaData);
    console.log(saveMedia);
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
    const errors = await mongooseErrorHandler(error);
    return res.json({ errors });
  }
};
