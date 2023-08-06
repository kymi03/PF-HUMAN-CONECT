/*
===============================================================================================================================
JavaScripFile: deleteUserController.js
Objetivo:  Archivo que permite creación de usuarios registrados
Autor: kymi Fernandez
Creation: 22 de Julio de 2023
==================================================================
Manifiesto de funciones:
=============================
==Metodos:
=============================
 deleteUserController = Funcion que permite eliminar un usuario del modelo user, utiliza el email para eliminarlo
===============================================================================================================================
*/
const user = require("../../models/user");
const mailer = require("./mailer");
const { ADMIN_EMAIL } = process.env;
const deleteUserController = async (req, res) => {
  try {
    const { email } = req.query;

    if (!email)
      throw new Error(
        "Debe proporcionar un correo electrónico para eliminar el usuario"
      );

    const deletedUser = await user.findOneAndDelete({
      email: email,
    });

    if (!deletedUser)
      return res.status(404).json({ error: "Usuario no encontrado" });

    await mailer.sendMail({
      from: `"Human Conet" ${ADMIN_EMAIL}`, // sender address
      to: email, // list of receivers
      subject: "Usuario eliminado - Human Conet", // Subject line
      html: `
		<h1>Human Conet - Confirmación de eliminación de usuario.</h1>
		<p>Hola, ${deletedUser.name}. Tu usuario en Human Conet fue eliminado exitosamente.</p>
		`, // html body
    });
    return res
      .status(201)
      .json({ status: "Usuario eliminado exitosamente", deletedUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = deleteUserController;
