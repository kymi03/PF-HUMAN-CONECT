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
const user = require('../../models/user');

const putUserController = async (req, res) => {
    const {
        id,
        name,
        lastName,
        email,
        phone,
        password
    } = req.body;
	try {
		const putUser = await user.updateOne(
            {_id: id},
            {$set: {name, lastName, email, phone, password } }
        );
        if(putUser.nModified === 0) {
            return res.status(404).json({error: "Usuario no encontrado" });
        }
        res.status(200).json(putUser);
	} catch (error) {
		res.status(500).json({ error: 'Error al actualizar el usuario', error });
	}
};

module.exports = putUserController;