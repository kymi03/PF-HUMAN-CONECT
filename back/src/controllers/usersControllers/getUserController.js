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

// const user = require('../../models/user');


// const getUserController = async (req, res) => {
//     try {
//         const { name, email, password } = req.query
//         const regexEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
//         let userFound

//         if (!name, email, password) {
//             userFound = await getUserController.find();
//             if (!userFound) {
//                 return res.status(404).json('no hay usuarios en la BD')

//             } else {
//                 if (!regexEmail.test(name, email, password))
//                     throw new Error('Debe proporcionar un correo electrónico válido');
//                 userFound = await RegisteredUsers.findOne({ email: email });
//                 if (!userFound)
//                     return res.status(404).json({ error: 'usuario no encontrado' });
//             }
//             return res.status(200).json(userFound)
//         }
//     } catch (error) {
//         res.status(500).json('no hay users')
//     }
// }

// module.exports = getUserController;

const user = require('../../models/user');

const getUserController = async (req, res) => {
    try {
        const { email, password } = req.query;
        const regexEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

        // Verificar que se proporcionen el nombre, email y password
        if ( !email || !password) {
            return res.status(400).json({ error: 'Debe proporcionar nombre, email y password' });
        }

        // Validar el formato del correo electrónico
        if (!regexEmail.test(email)) {
            return res.status(400).json({ error: 'Debe proporcionar un correo electrónico válido' });
        }

        // Buscar al usuario en la base de datos por su correo electrónico
        const userFound = await user.findOne({ email: email });

        if (!userFound) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        // Verificar que la contraseña coincida
        if (userFound.password !== password) {
            return res.status(401).json({ error: 'Contraseña incorrecta' });
        }

        // Si todo es correcto, devolver el usuario encontrado
        return res.status(200).json(userFound);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Ha ocurrido un error en el servidor' });
    }
};

module.exports = getUserController;