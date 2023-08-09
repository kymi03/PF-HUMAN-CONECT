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
const fs = require('fs');
const ejs = require('ejs');
const { errorMonitor } = require("nodemailer/lib/xoauth2");

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


    fs.readFile(__dirname + 'templateNotifiaction/userDelete.ejs', 'utf8', (err, data) => {
      if(err) {
        console.error('Error al leer la plantilla HTML: ', err);
        return;
      }

      const template = ejs.render(data, {
        nombre: deletedUser.name,
      });

      mailer.sendMail({
        from: `"Human Conet" ${ADMIN_EMAIL}`, // sender address
        to: email, // list of receivers
        subject: "Usuario eliminado - Human Conet", // Subject line
        html: template, // html body
      });

    })

    return res
      .status(201)
      .json({ status: "Usuario eliminado exitosamente", deletedUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = deleteUserController;
