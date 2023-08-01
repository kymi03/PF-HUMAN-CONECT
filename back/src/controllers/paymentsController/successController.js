const transporter = require("../usersControllers/mailer");
const { ADMIN_EMAIL } = process.env;
const successController = async (req, res) => {

  res.redirect("https://google.com.ar")
 /* await transporter.sendMail({
    from: `"Human Conet" ${ADMIN_EMAIL}`, // sender address
    to: email, // list of receivers
    subject: "Su donativo fue recibido", // Subject line
    html: `
    <h1>Human Conet - Confirmación de donativo.</h1>
    <p>Su donativo ha sido recibido con exito!</p>
    `, // html body
  });
  */

};
module.exports = successController;
