const MediaModel = require("../../../Database/Media.Service.DB/mediaSchema");

exports.deleteMedia = async (req, res) => {
  if (!req.admin || !req.mediaPartner) {
    return res.json({ message: "Access Denied", status: false });
  }
  const { _id } = req.body;
  if (!_id) {
    return res.json({ message: "Please Select Media ID", status: false });
  }
  try {
    const deleteMedia = await MediaModel.deleteOne({ _id: _id });
    if (deleteMedia) {
      return res.json({ message: "Media Deleted", status: true });
    }
  } catch (error) {
    console.log(error);
    return res.json({ message: "Internal Server Error", status: false });
  }
};
