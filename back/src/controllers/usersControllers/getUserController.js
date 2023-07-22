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


const getUserController = async (req, res) => {
    try {
        const { name } = req.query
        const regexEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
        let userFound

        if (!name) {
            userFound = await getUserController.find();
            if (!userFound) {
                return res.status(404).json('no hay usuarios en la BD')

            } else {
                if (!regexEmail.test(email))
                    throw new Error('Debe proporcionar un correo electrónico válido');
                userFound = await RegisteredUsers.findOne({ user_email: email });
                if (!userFound)
                    return res.status(404).json({ error: 'usuario no encontrado' });
            }
            return res.status(200).json(userFound)
        }
    } catch (error) {
        res.status(500).json('no hay users')
    }
}

module.exports = getUserController;