const mongoose = require("mongoose");
const validator = require("validator");

const Schema = mongoose.Schema;

const adminSchema = new Schema({
  Name: {
    type: String,
    default: "TaxiTop",
  },
  Role: {
    type: String,
    default: "admin",
  },
  Email: {
    type: String,
    required: [true, "Please Give A Email"],
    unique: true,
    validate: [validator.isEmail, "Please Provide Valide Email"],
  },
  Password: {
    type: String,
    required: [true, "Please Choose A Password"],
    min: [6, "At Least 6 Characters Required, Got {VALUE}"],
    match: [
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/,
      "Password must contain a uppercse, digit, lowercase and a special character",
    ],
  },
});

module.exports = adminSchema;
