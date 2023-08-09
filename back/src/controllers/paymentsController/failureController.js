const mailer = require("../usersControllers/mailer");
const Donation = require("../../models/donation");
const { ADMIN_EMAIL } = process.env;
const fs = require('fs');
const ejs = require('ejs');
const failureController = async (req, res) => {
  //EMAIL DE INFORMAR AL USUARIO DE FALLO DE DONACION
  const { preference_id } = req.query;
  const donation = await Donation.findOne({
    paymentID: preference_id,
  }).populate("owner", "email");
  const { email } = donation.owner;

  fs.readFile(__dirname + '/usersControllers/templateNotification/paymentDeclined.ejs', 'utf8', (err, data) => {

    if (err) {
      console.error('Error al leer la plantilla HTML:', err);
      return;
    }

    const template = ejs.render(data, {
      mensaje: 'Bienvenido a Human Conet'
    });

    mailer.sendMail({
      from: `"Human Conet" ${ADMIN_EMAIL}`, // sender address
      to: email, // list of receivers
      subject: "Problemas con su donativo", // Subject line
      html: template, // html body
    });
  });

  //ELIMINAR LA DONACIÓN DE LA BASE DE DATOS
  await Donation.deleteOne({ paymentID: preference_id });

  //REDIRIGIR AL USUARIO A UNA PAGINA INFORMATIVA
  res.redirect("http://localhost:5173/rechazado");
};
module.exports = failureController;
