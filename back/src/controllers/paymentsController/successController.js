const mailer = require("../usersControllers/mailer");
const Donation = require("../../models/donation");
const { ADMIN_EMAIL } = process.env;
const successController = async (req, res) => {
  const { preference_id, payment_type } = req.query;

  const donation = await Donation.findOne({
    paymentID: preference_id,
  }).populate("owner", "email");

  //Actualizar el estado de la donacion a pagada y el metodo de pago.
  await Donation.updateOne(
    { paymentID: preference_id },
    { paid: true, paymentMethod: payment_type }
  );
  const { email } = donation.owner;

  await mailer.sendMail({
    from: `"Human Conet" ${ADMIN_EMAIL}`, // sender address
    to: email, // list of receivers
    subject: "Su donativo fue recibido", // Subject line
    html: `
    <h1>Human Conet - Confirmación de donativo.</h1>
    <p>Su donativo ha sido recibido con exito!</p>
    `, // html body
  });

  //REDIRIGIR AL USUARIO A UNA VENTANA DE AGRADECIMIENTO.
  res.redirect("http://localhost:5173/agradecimiento");
};
module.exports = successController;
