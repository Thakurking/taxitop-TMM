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
      required: true,
      min: [6, "At Least 6 Characters Required, got {VALUE}"],
      match: [
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/,
        "Password must contain a uppercse, digit, lowercase and a special character",
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
    ServiceProvider: {
      type: String,
      enum: ["Company", "Agency"],
      required: [true, "Please Select Your Service"],
    },
    Address: {
      Street: {
        type: String,
      },
      City: {
        type: String,
      },
      Country: {
        type: String,
      },
      Pin: {
        type: String,
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
