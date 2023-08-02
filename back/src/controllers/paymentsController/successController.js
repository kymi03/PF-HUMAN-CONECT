const transporter = require("../usersControllers/mailer");
const { ADMIN_EMAIL } = process.env;
const successController = async (req, res) => {

  //ACA DEBERÍA PODER BUSCAR LA ULTIMA DONACIÓN DEL USUARIO



  //EMAIL DE AGRADECIMIENTO CON INFORMACIÓN DE SU PAGO

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

 //REDIRIGIR AL USUARIO A UNA VENTANA DE AGRADECIMIENTO.
 res.redirect("http://localhost:5173/agradecimiento")
};
module.exports = successController;
