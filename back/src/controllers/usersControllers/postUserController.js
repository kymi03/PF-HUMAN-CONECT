/*
===============================================================================================================================
JavaScripFile: postUserController.js
Objetivo:  Archivo que permite creación de usuarios registrados
Autor: kymi Fernandez
Creation: 22 de julio de 2023
==================================================================
Manifiesto de funciones:
=============================
==Metodos:
=============================
 postUserController = Funcion que permite agregar un nuevo usuario al modelo RegisteredUsers
===============================================================================================================================
*/

const user = require("../../models/user");
const transporter = require("./mailer");
const { ADMIN_EMAIL } = process.env;
const postUserController = async (req, res) => {
  const { name, lastName, email, password, phone } = req.body;

  try {
    const newUser = new user({
      name,
      lastName,
      email,
      password,
      phone,
    });

    await newUser.save();
    await transporter.sendMail({
      from: `"Human Conet" ${ADMIN_EMAIL}`, // sender address
      to: email, // list of receivers
      subject: "Bienvenido a Human Conet", // Subject line
      html: `
      <h1>Human Conet - Confirmación de usuario.</h1>
      <p>Hola <b>${name}</b>! Tu usuario en Human Conet fue creado exitosamente.</p>
      `, // html body
    });
    res.status(201).json(newUser);
  } catch (error) {
    console.error("Error al crear el usuario", error);
    res.status(500).json({ error: "Error al crear el usuario", error });
  }
};

module.exports = postUserController;
