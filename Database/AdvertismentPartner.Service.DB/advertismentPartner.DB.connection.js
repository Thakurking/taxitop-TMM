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
console.log(advertiserDB);
module.exports = advertiserDB;

// mongodb://TaxiTop-TTM:jAf5pAj3D8lXA6zw@main-shard-00-00-03xkr.mongodb.net:27017,main-shard-00-01-03xkr.mongodb.net:27017,main-shard-00-02-03xkr.mongodb.net:27017/main?ssl=true&replicaSet=Main-shard-0&authSource=admin&retryWrites=true
