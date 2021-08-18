const express = require("express");

const bookingRouter = express.Router();

const advertiserPartnerBookingController = require("../../controller/bookings/media.bookings.controller");

bookingRouter.get(
  "/advertiserPartner-bookings",
  advertiserPartnerBookingController.mediaBooking
);

module.exports = bookingRouter;
