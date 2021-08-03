const mediaDB = require("./media.Service.DB.Connection");

const MediaModel = mediaDB.model(
  "media",
  require("../../media-service/models/media.model")
);

console.log(MediaModel);
module.exports = MediaModel;
