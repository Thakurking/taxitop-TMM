const express = require("express");

const app = express.Router();

const campaignCreateController = require("../../controller/crud/campaign.create.controller");

const isUser = require("../../../auth/auth");

app.post("create-campaign", isUser, campaignCreateController.createCampaign);

module.exports = app;
