const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const campaignSchema = new Schema({
  CampaignName: {
    type: String,
    required: [true, "Please Give Your Campaign A Name"],
  },
  //   CampaignDate: {
  //     required: true,
  //     Start: {
  //       type: String,
  //       required: true,
  //     },
  //     End: {
  //       type: String,
  //       required: true,
  //     },
  //   },
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
    Slots: [{
      Day: {
        type: String,
        required: [true, "Please Select A Day"],
      }
      Start: {
        type: String,
        required: [true, "Please Select A Start Day"]
      },
      End:{
        type: String,
        required: [true, "Please Select A End Day"]
      }
    }]
  },
});
