const nodemailer = require("nodemailer");

exports.transporter = nodemailer.createTransport({
  service: process.env.service,
  port: 80,
  auth: {
    user: process.env.user,
    pass: process.env.pass,
  },
});
