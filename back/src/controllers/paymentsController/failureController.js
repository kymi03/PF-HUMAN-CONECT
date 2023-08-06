const mailer = require("../usersControllers/mailer");
const Donation = require("../../models/donation");
const { ADMIN_EMAIL } = process.env;
const failureController = async (req, res) => {
  //EMAIL DE INFORMAR AL USUARIO DE FALLO DE DONACION
  const { preference_id } = req.query;
  const donation = await Donation.findOne({
    paymentID: preference_id,
  }).populate("owner", "email");
  const { email } = donation.owner;

  await mailer.sendMail({
    from: `"Human Conet" ${ADMIN_EMAIL}`, // sender address
    to: email, // list of receivers
    subject: "Problemas con su donativo", // Subject line
    html: `
    <h1>Human Conet - problemas con su donativo.</h1>
    <p>Su donativo no se ha realizado con exito.</p>
    `, // html body
  });

  //ELIMINAR LA DONACIÓN DE LA BASE DE DATOS
  await Donation.deleteOne({ paymentID: preference_id });

  //REDIRIGIR AL USUARIO A UNA PAGINA INFORMATIVA
  res.redirect("http://localhost:5173/rechazado");
};
module.exports = failureController;
