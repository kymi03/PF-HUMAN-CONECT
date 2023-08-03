const transporter = require("../usersControllers/mailer");
const { ADMIN_EMAIL } = process.env;
const failureController = async (req, res) => {



  //ELIMINAR LA DONACIÓN DE LA BASE DE DATOS

  //EMAIL DE INFORMAR AL USUARIO DE FALLO DE DONACION

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

  //REDIRIGIR AL USUARIO A UNA PAGINA INFORMATIVA
 res.redirect("http://localhost:5173/rechazado")
};
module.exports = failureController;