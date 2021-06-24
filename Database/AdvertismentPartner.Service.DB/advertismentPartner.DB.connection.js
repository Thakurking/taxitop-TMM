const mongoose = require("mongoose");

const advertiserDB = mongoose.createConnection(
  "mongodb+srv://TaxiTop-TTM:jAf5pAj3D8lXA6zw@cluster0.sop2d.mongodb.net/TaxiTop-AdvertismentPartner?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  }
);
module.exports = advertiserDB;
