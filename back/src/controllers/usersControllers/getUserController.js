/*
===============================================================================================================================
JavaScripFile: getUserController.js
Objetivo:  Archivo que permite obtener los usuarios registrados
Autor: Kymi Fernandez
Creation: 22 de julio de 2023
==================================================================
Manifiesto de funciones:
=============================
==Metodos:
=============================
 getUserController = Funcion que permite Obtener todos los usuarios registrados, al buscarlos por email
===============================================================================================================================
*/
const user = require('../../models/user');
const admin = require ('firebase-admin')
const bcrypt = require ('bcryptjs')


const getUserController = async (req, res) => {
    try {
        const { email, password, token, uemail } = req.query;//token y uemail son recibidos del login de google        
        const regexEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

        if (allUsers.length === 0) {
            return res.status(404).json({ error: 'No se encontraron usuarios' });
          } if(allUsers) {
               // Devolver la lista de usuarios encontrados
          return res.status(200).json(allUsers);
          }
          
        if(token!=undefined){
            const tokenVerifier = await admin.auth().verifyIdToken(token)//se decodifica el token para verificar autenticamente de firebase
            const userFound = await user.findOne({email: uemail});          
            // una vez verificado,se chequea si el email coincide con el email del token de firebase
            if(userFound==undefined){
                return res.status(404).json({error:"Registre su email para poder loguearse"})
            }
            if ( uemail == tokenVerifier.email ) {
                return res.status(201).json({email: userFound.email, name: userFound.name, lastName: userFound.lastName, phone: userFound.phone, id: userFound._id})
            }
        }
        console.log('AQUI',email);
        // Buscar al usuario en la base de datos por su correo electrónico
        const userFound = await user.findOne({ email: email });

        const passwordCorrect = user === null
        ? false
        : await bcrypt.compare(password, userFound.password)
        // Verificar que se proporcionen el email y password

        if ( !email || !password) {
            return res.status(400).json({ error: 'Debe proporcionar email y password' });
        }

        // Validar el formato del correo electrónico
        if (!regexEmail.test(email)) {
            return res.status(400).json({ error: 'Debe proporcionar un correo electrónico válido' });
        }


        if (!userFound) {
            return res.status(404).json({ error: 'Email o Contraseña incorrecta' });
        }

        // Verificar que la contraseña coincida
        if (!passwordCorrect) {
            return res.status(401).json({ error: 'Email o Contraseña incorrecta' });
        }

        // Si todo es correcto, devolver el usuario encontrado
        return res.status(200).json({_id:userFound._id, name:userFound.name, lastName:userFound.lastName, email:userFound.email, phone:userFound.phone});
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Ha ocurrido un error en el servidor' });
    }
};

module.exports = getUserController;