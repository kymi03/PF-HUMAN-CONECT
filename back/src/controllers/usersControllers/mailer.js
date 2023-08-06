const nodemailer = require("nodemailer");
require('dotenv').config();
const { ADMIN_EMAIL, ADMIN_PASS } = process.env;
const ejs = require('ejs');
const path = require('path');



const mailer = async (usrData) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: ADMIN_EMAIL,
      pass: ADMIN_PASS,
    },
  });
}

module.exports = mailer;
