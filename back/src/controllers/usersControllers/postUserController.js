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
const admin = require('firebase-admin')
const bcrypt = require('bcryptjs')
const mailer = require("./mailer");
const { ADMIN_EMAIL } = process.env;
const fs = require('fs');
const ejs = require('ejs');


//credenciales para poder hacer el decode del token de firebase
admin.initializeApp({
  credential: admin.credential.cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n')
  })
});




const postUserController = async (req, res) => {
  const { name, lastName, email, password, phone, token, uemail } = req.body;
  const saltRound = 10;
  const hashedPass = await bcrypt.hash(password, saltRound);

  if (!name || !lastName || !email || !password || !phone) {
    return res.status(401).json({ error: "Campos obligatorios insuficientes" })
  }


  try {
    //se verifica si el email esta en uso
    const existingUser = await user.findOne({ email: email || uemail })

    //si ya esta registrado, retorna un msj de error
    if (existingUser) {
      return res.status(400).json({ error: "Este email ya esta registrado" })
    }

    //si no esta en uso se verifica que el token sea autentico y crea el usuario en la db
    if (token != undefined) {
      const tokenVerifier = await admin.auth().verifyIdToken(token)//se decodifica el token para verificar autenticamente de firebase
      if (tokenVerifier.email) {
        const newGoogleUser = new user({
          name,
          lastName,
          email,
          password: token,
          phone,
        });
        await newGoogleUser.save()
        return res.status(201).json(newGoogleUser);
      }
    }

    const newUser = new user({
      name,
      lastName,
      email,
      password: hashedPass,
      phone,
    });
    await newUser.save();

    fs.readFile(__dirname + '/templateNotification/userCreated.ejs', 'utf8', (err, data) => {

      if (err) {
        console.error('Error al leer la plantilla HTML:', err);
        return;
      }

      const template = ejs.render(data, {
        nombre: name,
        mensaje: 'Bienvenido a Human Conet'
      });

      mailer.sendMail({
        from: `"Human Conet" ${ADMIN_EMAIL}`, // sender address
        to: email, // list of receivers
        subject: "Bienvenido a Human Conet", // Subject line
        html: template, // html body
      });
    });


    return res.status(201).json(newUser);
  } catch (error) {
    console.error("Error al crear el usuario", error);
    return res.status(500).json({ error: "Error al crear el usuario", error });
  }
};

module.exports = postUserController;