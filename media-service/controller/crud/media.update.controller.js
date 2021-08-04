const MediaModel = require("../../../Database/Media.Service.DB/mediaSchema");
const { mongooseErrorHandler } = require("../../../Database/Error/DB.Error");

exports.updateMedia = async (req, res) => {
  const updateData = req.body;
  try {
    console.log(updateData);
    const updateMedia = await MediaModel.updateOne(
      { _id: updateData._id },
      { $set: updateData },
      { multi: true }
    );
    console.log(updateMedia);
    if (updateMedia) {
      return res.json({
        message: "Your Media Updated Successfully",
        status: true,
      });
    }
  } catch (error) {
    console.log(error);
    const errors = await mongooseErrorHandler(error);
    if (errors) {
      return res.json({ errors });
    } else {
      return res.json({ message: "Internal Server Error", status: false });
    }
  }
};
