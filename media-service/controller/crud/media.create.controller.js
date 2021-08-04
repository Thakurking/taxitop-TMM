const MediaModel = require("../../../Database/Media.Service.DB/mediaSchema");

exports.mediaCreate = async (req, res) => {
  const mediaData = req.body;
  try {
    console.log(mediaData);
  } catch (error) {
    console.log(error);
  }
};
