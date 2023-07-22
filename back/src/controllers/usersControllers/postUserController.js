const user = require('../../models/user');

const postUserController = async (req, res) =>{
    try{
        if(!req.body) throw new Error('Debe proporcionar información del usuario');

        const createUser = new user(req.body)
        await createUser.save();

        return res.status(200).json('usuario creado');
    } catch(error){
        res.status(500).json('no se puede crear el usuario')
    }
}

module.export = postUserController;