const express = require("express");

const app = express.Router();

const campaignCreateController = require("../../controller/crud/campaign.create.controller");
const campaignDeactivateController = require("../../controller/crud/campaign.deActivate.controller");
const campaignUpdateController = require("../../controller/crud/campaign.update.controller");
const campaignDeleteController = require("../../controller/crud/campaign.delete.controller");
const campaignAddToCartController = require("../../controller/crud/campaign.addToCart.controller");

const isUser = require("../../../auth/auth");

app.post("/create-campaign", campaignCreateController.createCampaign);
app.put(
  "/campaign-deActivate",
  campaignDeactivateController.deActivateCampaign
);
app.put("/campaign-update", campaignUpdateController.updateCampaign);
app.delete("/campaign-delete", campaignDeleteController.deleteCampaign);
app.post("/campaign-addToCart", campaignAddToCartController.addToCart);

module.exports = app;
