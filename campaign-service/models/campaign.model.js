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
    type: String,
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
});
// "Board Name",
//   "Representative Image",
//   "Country",
//   "City",
//   "Latitude",
//   "Longitude",
//   "Venue Type",
//   "Screen Width (pixels)",
//   "Screen Height (pixels)",
//   "Video Support",
//   "Audio Support",
//   "Min Ad Length (s)",
//   "Max Ad Length (s)";
// "Houston Community College",
//   "https://res.cloudinary.com/caasie/image/upload/v1567487448/Board_Image_Placeholder_190903_nfa4ah.png",
//   "United States",
//   "West University Place",
//   -95.376228,
//   29.738501,
//   "Colleges and Universities  ",
//   1920,
//   1080,
//   "Yes",
//   "Yes",
//   "5",
//   "60";
// "Doctors Office",
//   "https://res.cloudinary.com/caasie/image/upload/v1567487448/Board_Image_Placeholder_190903_nfa4ah.png",
//   "United States",
//   "West University Place",
//   -95.397464,
//   29.742222,
//   "Doctor’s Offices  ",
//   1920,
//   1080,
//   "Yes",
//   "Yes",
//   "5",
//   "90";
// "Doctors Office",
//   "https://res.cloudinary.com/caasie/image/upload/v1567487448/Board_Image_Placeholder_190903_nfa4ah.png",
//   "United States",
//   "West University Place",
//   -95.400382,
//   29.710576,
//   "Doctor’s Offices  ",
//   1920,
//   1080,
//   "Yes",
//   "Yes",
//   "5",
//   "90";
