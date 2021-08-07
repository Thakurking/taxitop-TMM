const express = require("express");

const app = express.Router();

const mediaCreateController = require("../../controller/crud/media.create.controller");
const mediaUpdateController = require("../../controller/crud/media.update.controller");
const mediaDeActivateController = require("../../controller/crud/media.deActivate.controller");
const mediaDeleteConntroller = require("../../controller/crud/media.delete.controller");

const upload = require("../../helper/multer/multer");

const isUser = require("../../../auth/auth");

app.post(
  "/media-create",
//   isUser,
  upload.single("mediaImage"),
  mediaCreateController.mediaCreate
);
app.put("/media-update", isUser, mediaUpdateController.updateMedia);
app.put("/media-deactivate", isUser, mediaDeActivateController.deactivateMedia);
app.delete("/media-delete", isUser, mediaDeleteConntroller.deleteMedia);

module.exports = app;
