const userPostController = require("../../controllers/postControllers/userPostController");
const user = require('../../models/user')


const userPostHandlers = async (req, res) => {
  try{
    const fxUserHandler = await userPostController(req.body);

    // const adminData = new admin(req.body);

    // adminData.save();

    // res.status(200).json('admin creado')
  if(fxUserHandler) {
    return res.status(200).json('User creado');

  }

  }catch(error){

    res.status(500).json('Error al crear el user')
  }
  
};

module.exports = userPostHandlers;
