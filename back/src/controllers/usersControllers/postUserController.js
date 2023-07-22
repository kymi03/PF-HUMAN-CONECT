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

    res.status(201).json(newUser);
  } catch (error) {
    console.error("Error al crear el usuario", error);
    res.status(500).json({ error: "Error al crear el usuario", error });
  }
};

module.exports = postUserController;