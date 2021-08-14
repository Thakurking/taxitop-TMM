const express = require("express");

const app = express.Router();

const addToCartController = require("../../controller/cart/campaign.addToCart.controller");
const deleteCartController = require("../../controller/cart/campaign.deleteCart.controller");
const cartBookingController = require("../../controller/cart/cart.booking.controller");

const isUser = require("../../../auth/auth");

app.post("/addToCart", isUser, addToCartController.addToCart);
app.delete("/deleteCart", deleteCartController.deleteCart);
app.post("/book-media-cart", isUser, cartBookingController.bookMedia);

module.exports = app;
