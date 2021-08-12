const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema(
  {
    User_ID: {
      type: Schema.Types.ObjectId,
      ref: "advertismentPartner",
    },
    Media_ID: {
      type: Schema.Types.ObjectId,
      ref: "media",
    },
    Quantity: {
      type: Number,
      required: true,
    },
    MediaName: {
      type: String,
      reuqired: true,
    },
    Price: {
      type: Number,
      required: true,
    },
    Status: {
      type: String,
      default: "A",
    },
    ModifiedOn: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = cartSchema;
