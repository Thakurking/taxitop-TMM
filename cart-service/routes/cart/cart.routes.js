const express = require("express");

const app = express.Router();

const addToCartController = require("../../controller/cart/campaign.addToCart.controller");
const deleteCartController = require("../../controller/cart/campaign.deleteCart.controller");

app.post("/addToCart", addToCartController.addToCart);
app.delete("/deleteCart", deleteCartController.deleteCart);

module.exports = app;