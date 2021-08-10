const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const campaignSchema = new Schema(
  {
    Owner: {
      type: Schema.Types.ObjectId,
      required: true,
      refPath: "onModel",
    },
    onModel: {
      type: String,
      required: true,
      enum: ["advertismentPartner", "admin"],
    },
    CampaignName: {
      type: String,
      unique: true,
      required: [true, "Please Give Your Campaign A Name"],
    },
    CampaignDate: {
      Start: {
        required: [true, "Please Select Date"],
        Year: {
          type: String,
          required: [true, "Please Choose Start Year"],
        },
        Month: {
          type: String,
          required: [true, "Please Choose Start Month"],
        },
        Day: {
          type: String,
          required: [true, "Please Choose Start Day"],
        },
      },
      Finish: {
        required: [true, "Please Select Date"],
        Year: {
          type: String,
          required: [true, "Please Choose Finish Year"],
        },
        Month: {
          type: String,
          required: [true, "Please Choose Finish Month"],
        },
        Day: {
          type: String,
          required: [true, "Please Choose Finish Day"],
        },
      },
    },
    CampaignSchedule: {
      required: [true, "Please Enter Campaign Schedule"],
      ScheduleType: {
        type: String,
        enum: {
          values: ["Always-On", "Custom-Schedule"],
          message: "{VALUE} is Not Supported",
        },
        required: [true, "Please Choose Your Campaign Schedule"],
      },
      Slots: [
        {
          Day: {
            type: String,
            required: [true, "Please Select A Day"],
          },
          Start: {
            type: String,
            required: [true, "Please Select A Start Day"],
          },
          End: {
            type: String,
            required: [true, "Please Select An End Day"],
          },
        },
      ],
    },
    SpendLimit: {
      type: Number,
      required: [true, "Please Give Your Spend Limit"],
    },
    ArtWork: {
      type: String,
      default: null,
    },
    Medias: [
      {
        type: Schema.Types.ObjectId,
        ref: "media",
        default: null,
      },
    ],
    CPP: {
      type: Number,
      default: null,
    },
    Status: {
      type: String,
      required: true,
      default: "A",
    },
  },
  { timestamps: true }
);

mediaSchema.pre("updateOne", async function (next) {
  this.options.runValidators = true;
  next();
});

module.exports = campaignSchema;
