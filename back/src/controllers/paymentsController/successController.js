const mailer = require("../usersControllers/mailer");
const Donation = require("../../models/donation");
const { ADMIN_EMAIL } = process.env;
const fs = require('fs');
const ejs = require('ejs');

const successController = async (req, res) => {
  const { preference_id, payment_type } = req.query;

  const donation = await Donation.findOne({
    paymentID: preference_id,
  }).populate("owner", "email");
console.log('donation' , donation);
  //Actualizar el estado de la donacion a pagada y el metodo de pago.
  await Donation.updateOne(
    { paymentID: preference_id },
    { paid: true, paymentMethod: payment_type }
  );
  const { email } = donation.owner;
  console.log('email' , email);

   fs.readFile(__dirname + '../usersControllers/templateNotification/acceptedPayment.ejs', 'utf8', (err, data) => {

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
        subject: "Su donativo ah sido recibido con exito.", // Subject line
        html: template, // html body
      });
    });

  //REDIRIGIR AL USUARIO A UNA VENTANA DE AGRADECIMIENTO.
  res.redirect("http://localhost:5173/agradecimiento");
};
module.exports = successController;
