/*
===============================================================================================================================
JavaScripFile: putUserController.js
Objetivo:  Archivo que permite acualización de usuarios registrados
Autor: kymi Fernandez
Creation: 22 de julio de 2023
==================================================================
Manifiesto de funciones:
=============================
==Metodos:
=============================
 putUserController = Funcion que permite actualizar un usuario del modelo user
===============================================================================================================================
*/
const user = require("../../models/user");
const mailer = require("./mailer");
const { ADMIN_EMAIL } = process.env;

const putUserController = async (req, res) => {
  const { id, name, lastName, email, phone, password } = req.body;
  try {
    const putUser = await user.updateOne(
      { _id: id },
      { $set: { name, lastName, email, phone, password } }
    );
    if (putUser.nModified === 0) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }
    await mailer.sendMail({
      from: `"Human Conet" ${ADMIN_EMAIL}`, // sender address
      to: email, // list of receivers
      subject: "Datos actualizados - Human Conet", // Subject line
      html: `
            <h1>Human Conet - Confirmación de actualización.</h1>
            <p>Hola <b>${name}</b>! Tu usuario de Human Conet fue actualizado exitosamente.</p>
            `, // html body
    });
    res.status(200).json(putUser);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el usuario", error });
  }
};

module.exports = putUserController;
