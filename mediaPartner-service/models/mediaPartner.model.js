const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

const mediaPartnerSchema = new Schema(
  {
    Email: {
      type: String,
      required: [true, "Please Enter A Email"],
      unique: true,
      validate: [validator.isEmail, "Please Enter Valid Email"],
    },
    Password: {
      type: String,
      required: [true, "Please Enter give Password"],
      min: [6, "At Least 6 Characters Required, got {VALUE}"],
      match: [
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/,
        "Password must contain a uppercse, digit, lowercase and a special character and at least 6 Characters",
      ],
    },
    BusinessName: {
      type: String,
      required: [true, "Give Your Business A Name"],
      unique: true,
    },
    ConcernedPersonName: {
      type: String,
      required: [true, "Give Business Owner Name or Concerned Person Name"],
    },
    Phone: {
      type: String,
      unique: true,
      min: [10, "Wrong Phone Number"],
      required: [true, "Please Enter a Phone Number"],
      validate: [validator.isMobilePhone, "Please Give Correct Number"],
    },
    Role: {
      type: String,
      default: "mediaPartner",
    },
    Status: {
      type: String,
      default: "F",
      required: true,
    },
    Media: [
      {
        type: Schema.Types.ObjectId,
        ref: "media",
      },
    ],
    // GSTnumber: {
    //   type: String,
    //   unique: true,
    //   required: [true, "Please Give GST Number"],
    // },
  },
  { timestamps: true }
);

mediaPartnerSchema.pre("save", async function (next) {
  if (!this.isModified("Password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.Password = await bcrypt.hash(this.Password, salt);
  next();
});

mediaPartnerSchema.methods.passwordVerification = async function (Password) {
  return await bcrypt.compare(Password, this.Password);
};

mediaPartnerSchema.pre("updateOne", async function (next) {
  this.options.runValidators = true;
  next();
});

module.exports = mediaPartnerSchema;
