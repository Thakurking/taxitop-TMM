const mongoose = require("mongoose");
const validator = require("validator");

const Schema = mongoose.Schema;

const mediaSchema = new Schema({
  Owner: {
    type: "ObjectId",
    refPath: "onModel",
  },
  onModel: {
    type: String,
    required: true,
    enum: ["mediaPartner", "advertismentPartner", "admin"],
  },
  ScreenTitle: {
    type: String,
    required: [true, "Please Give Your Screen A Title"],
    validate: [validator.isAlphanumeric, "Please Enter Alpha Numeric Value"],
  },
  BusinessName: {
    type: String,
    required: [true, "Please Give Your Business Name"],
    validate: [validator.isAlpha, "Please Enter Only Alphabet Character"],
  },
  TouchPoint: {
    type: String,
    enum: {
      values: [
        "Airport",
        "Apartment",
        "Automotive Retail",
        "Bus Stand",
        "Cafe Network",
        "Clinics",
        "Co Living",
        "Corporate",
        "Co Working Space",
        "Electronic Retail",
        "Government Office",
        "Health Care",
        "High End Retail",
        "Hospitality",
        "Hyper Mart",
        "Mall",
        "Metro Station",
        "Outdoor Digital",
        "Personal Care",
        "Railway Station",
        "Residential",
        "Restaurant",
        "Retail",
        "Store",
        "Supermart",
      ],
      message: "{VALUE} is not supported",
    },
    required: [true, "Please Select A Touch Point"],
  },
  Address: {
    type: String,
    required: [true, "Please Enter Screen Address"],
  },
  Locality: {
    type: String,
    required: [true, "Please Enter Locality"],
  },
  City: {
    type: String,
    required: [true, "Please Enter City"],
  },
  State: {
    type: String,
    required: [true, "Please Enter State"],
  },
  Country: {
    type: String,
    required: [true, "Please Enter Country"],
  },
  Phone: {
    type: String,
    required: [true, "Please Enter Phone Number"],
    min: [10, "Wrong Phone Number"],
    validate: [validator.isMobilePhone, "Wrong Phone Number"],
  },
  LocationMonthlyFootfall: {
    type: String,
    required: true,
  },
  ConcernedPersonName: {
    type: String,
    required: true,
    validate: [validator.isAlpha, "Please Give Alphabetical Values"],
  },
  /**
   * Slots will be like =>
   * Slots: {
   *  OperatingHours: "FlexibleOpen",
   *  DayAndTime: [
   *    {
   *      day: "Monday",
   *      from: "10:00",
   *      to: "17:00"
   *  },
   *    {
   *      day: "Tuesady",
   *      from: "12:00",
   *      to: "18:00"
   *  },
   *    {
   *      day: "Sunday",
   *      from: "13:00",
   *      to: "19:00"
   *  }
   * ]
   * }
   */
  Slots: {
    OperatingHours: {
      type: String,
      enum: {
        values: ["FlexibleOpen", "24/7Open"],
        message: "{VALUE} not supported",
      },
      required: true,
    },
    DayAndTime: [
      {
        day: {
          type: String,
          required: true,
        },
        from: {
          type: String,
          required: true,
        },
        to: {
          type: String,
          required: true,
        },
      },
    ],
  },
  Price: {
    type: String,
    required: [true, "Please Enter Price Rate"],
    validate: [validator.isDecimal, "Please Enter Decimal Values"],
  },
  ScreenSize: {
    Width: {
      type: String,
      required: [true, "Please Enter Screen Width"],
    },
    Height: {
      type: String,
      required: [true, "Please Enter Screen Height"],
    },
  },
  ScreenType: {
    type: String,
    enum: {
      values: ["TV-Screen", "LED-Billboard"],
      message: "{VALUES} is Not Supported",
    },
    required: [true, "Please Select Screen Type"],
  },
  ScreenPlace: {
    type: String,
    enum: {
      values: ["Indoor", "Outdoor"],
      message: "{VALUE}, is Not Supported",
    },
    required: [true, "Please Select Screen Place"],
  },
  ScreenResolution: {
    type: String,
    enum: {
      values: ["Full-HD", "4K"],
      message: "{VALUE} is Not Supported",
    },
    required: [true, "Please Select Screen Resolution"],
  },
  ScreenOrientation: {
    type: String,
    enum: {
      values: ["Landscape", "Portrait"],
      message: "{VALUE} is Not Supported",
    },
    required: [true, "Please Select Screen Orientation"],
  },
  ScreenRestrictions: {
    type: String,
    required: [true, "Please Type Your Screen Restrictions"],
  },
  ScreenDescription: {
    type: String,
    required: [true, "Please Add Description About Your Screen"],
  },
  Ratio: {
    male: {
      type: Number,
      required: true,
    },
    female: {
      type: Number,
      required: true,
    },
  },
  Images: [
    {
      data: Buffer,
      type: String,
      required: [true, "Please Select An Image"],
    },
  ],
});
module.exports = mediaSchema;
