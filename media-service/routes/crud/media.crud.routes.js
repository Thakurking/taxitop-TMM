const express = require("express");

const app = express.Router();

const mediaCreateController = require("../../controller/crud/media.create.controller");

app.post("/media-create", mediaCreateController.mediaCreate);

module.exports = app;
