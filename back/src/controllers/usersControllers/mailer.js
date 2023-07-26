const nodemailer = require("nodemailer");
const {ADMIN_EMAIL, ADMIN_PASS} = process.env;
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

module.exports = transporter;
