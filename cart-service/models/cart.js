const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema(
  {
    User_ID: {
      type: Schema.Types.ObjectId,
      ref: "advertismentPartner",
    },
    Medias: {
      media_id: {
        type: String,
        required: true,
      },
      mediaName: {
        type: String,
        required: true,
      },
      mediaPrice: {
        type: String,
        required: true,
      },
      mediaAddress: {
        type: String,
        required: true,
      },
      mediaOwner: {
        type: String,
        required: true,
      },
    },
    // Media_ID: {
    //   type: Schema.Types.ObjectId,
    //   ref: "media",
    // },
    // MediaName: {
    //   type: String,
    //   reuqired: true,
    // },
    // Price: {
    //   type: Number,
    //   required: true,
    // },
    Status: {
      type: String,
      default: "A",
    },
    // ModifiedOn: {
    //   type: Date,
    //   default: Date.now,
    // },
  },
  { timestamps: true }
);

module.exports = cartSchema;