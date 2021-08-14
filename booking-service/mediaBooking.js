const NRP = require("node-redis-pubsub");

// const AdvertismentPartnerModel = require("../Database/AdvertismentPartner.Service.DB/advertismentPartnerSchema");
// const CartModel = require("../Database/Cart.Service.DB/cartSchema");

const nodemailer = require("nodemailer");

const config = {
  port: 6379,
  host: "127.0.0.1",
  scope: "TaxiTop_Microservices",
};

const nrp = new NRP(config);

// async function main() {
  // nrp.on("BOOKING", async (data) => {
  //   console.log(data);
  //   const Partner = await AdvertismentPartnerModel.findOne({
  //     _id: data.adPartner,
  //   });
  //   const Email = Partner.Email
  //   let transporter = await nodemailer.createTransport({
  //     service: "Gmail",
  //     auth: {
  //       user: process.env.user,
  //       pass: process.env.pass,
  //     },
  //   });
  //   const mailOption = {
  //     from: process.env.user,
  //     to: Email,
  //     subject: `New Booking`,
  //     html: `<h1>AdPartner Details</h1><br><p>${Partner}</p><br><h1>Media Detail</h1><br><p>${data.adData}</p>`,
  //   };
  //   console.log(mailOption);
  //   const mail = await transporter.sendMail(mailOption);
  //   const updateCart = await CartModel.updateOne(
  //     { User_ID: data.adPartner },
  //     { $set: { Status: "F" } }
  //   );
  //   console.log(updateCart);
  //   if (!mail || !updateCart) {
  //     nrp.emit("BOOKING", "Something Went Wrong Please Try Again");
  //   } else {
  //     nrp.emit("BOOKING", "Thank You For Booking Will Contact You Soon");
  //   }
  // });
// }

// module.exports = main;
