const mongoose = require("mongoose");

const mediaPartnerDB = mongoose.createConnection(
  `mongodb+srv://TaxiTop-TTM:jAf5pAj3D8lXA6zw@cluster0.sop2d.mongodb.net/TaxiTop-MediaPartner?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  }
);
console.log(mediaPartnerDB)
module.exports = mediaPartnerDB;
