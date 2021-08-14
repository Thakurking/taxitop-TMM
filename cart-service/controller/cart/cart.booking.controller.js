const NRP = require("node-redis-pubsub");

const config = {
  post: 6379,
  host: "127.0.0.1",
  scope: "TaxiTop_Microservices",
};
const nrp = new NRP(config);
exports.bookMedia = async (req, res) => {
  console.log(req.adPartner);
  if (req.adPartner && req.isAdPartner) {
    console.log(nrp);
    const mediaData = req.body;
    const adPartner = req.adPartner;
    console.log(mediaData);
    nrp.emit("BOOKING", { mediaData, adPartner });
    nrp.on("BOOKING_SUCC", (data) => {
      console.log(data);
    });
    nrp.on("BOOKING_ERR", (data) => {
      console.log(data);
    });
  }
  // if (req.adPartner && req.isAdPartner) {
  //   try {
  //     const adData = req.body;
  //     const adPartner = await AdvertismentPartnerModel.findOne({
  //       _id: req.adPartner,
  //     });
  //     let transporter = nodemailer.createTransport({
  //       service: "Gmail",
  //       auth: {
  //         user: process.env.user,
  //         pass: process.env.pass,
  //       },
  //     });
  //     const mailOption = {
  //       from: process.env.user,
  //       to: adPartner.Email,
  //       subject: `New Booking Came`,
  //       html: `<h1>AdPartner Details</h1><br><p>${adPartner}</p><br><h1>Media Detail</h1><br><p>${adData}</p>`,
  //     };
  //     const mail = transporter.sendMail(mailOption);
  //     const updateCart = await CartModel.updateOne(
  //       {
  //         User_ID: req.adPartner,
  //       },
  //       { $set: { Status: "F" } }
  //     );
  //     console.log(updateCart);
  //     if (!mail && !updateCart) {
  //       return res.json({
  //         message: "Something Went Wrong Please Try Again",
  //         status: false,
  //       });
  //     } else {
  //       return res.json({
  //         message: "Thank You For Your Booking We Will Contact You Soon",
  //       });
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     return res.json({
  //       message: "Internal Server Error Please Try Again",
  //       status: false,
  //     });
  //   }
  // }
};
