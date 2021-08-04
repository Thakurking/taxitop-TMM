const express = require("express");

const app = express.Router();

const mediaCreateController = require("../../controller/crud/media.create.controller");
const mediaUpdateController = require("../../controller/crud/media.update.controller");
const mediaDeleteController = require("../../controller/crud/media.delete.controller");

const isUser = require("../../../auth/auth");

app.post("/media-create", isUser, mediaCreateController.mediaCreate);
app.put("/media-update", isUser, mediaUpdateController.updateMedia);
app.put("/media-deactivate", isUser, mediaDeleteController.deactivateMedia);

module.exports = app;
