const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

const adPartnerSchema = new Schema(
  {
    Email: {
      type: String,
      required: [true, "Please Enter Your Company's Email"],
      unique: true,
      validate: [validator.isEmail, "Please Enter A Valide Email"],
    },
    Password: {
      type: String,
      required: [true, "Please Enter Password"],
      min: [6, "At Least 6 Characters Required, got {VALUE}"],
      match: [
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/,
        "Password must contain a uppercse, digit, lowercase and a special character and at least 6 Characters",
      ],
    },
    OrganisationName: {
      type: String,
      required: [true, "Please Give Your Business Name"],
      unique: true,
      validate: [
        validator.isAlpha,
        "Business Names Can Only Have Alphabet Characters",
      ],
    },
    Role: {
      type: String,
      default: "advertisingPartner",
    },
    Status: {
      type: String,
      default: "F",
      required: true,
    },
    ServiceProvider: {
      type: String,
      enum: ["Company", "Agency"],
      required: [true, "Please Select Your Service"],
    },
    Phone: {
      type: String,
      min: [10, "Wrong Phone Number"],
      required: [true, "Please Enter a Phone Number"],
      unique: true,
    },
    Address: {
      Street: {
        type: String,
        default: null,
      },
      City: {
        type: String,
        default: null,
      },
      Country: {
        type: String,
        default: null,
      },
      Pin: {
        type: String,
        default: null,
      },
    },
  },
  { timestamps: true }
);

adPartnerSchema.pre("save", async function (next) {
  if (!this.isModified("Password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.Password = await bcrypt.hash(this.Password, salt);
  next();
});

adPartnerSchema.methods.passwordVerification = async function (Password) {
  return await bcrypt.compare(Password, this.Password);
};

adPartnerSchema.pre("updateOne", async function (next) {
  this.options.runValidators = true;
  next();
});

module.exports = adPartnerSchema;
