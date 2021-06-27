const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MediaPartnerOTPSchema = new Schema({
  userID: {
    type: String,
    required: true,
  },
  OTP: {
    type: String,
    min: 4,
    required: true,
  },
  Status: {
    type: String,
    default: "F",
  },
  UsedFor: {
    type: String,
    default: "MediaPartnerVerification",
  },
});

module.exports = MediaPartnerOTPSchema;
