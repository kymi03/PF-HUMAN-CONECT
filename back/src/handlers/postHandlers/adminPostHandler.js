const adminPostController = require("../../controllers/postControllers/adminPostController");
const admin = require('../../models/admin')


const adminPostHandlers = async (req, res) => {
  try{
    const fxAdminHandler = await adminPostController(req.body);

    // const adminData = new admin(req.body);

    // adminData.save();

    // res.status(200).json('admin creado')
  if(fxAdminHandler) {
    return res.status(200).json('Admin creado');

  }

  }catch(error){

    res.status(500).json('Error al crear el admin')
  }
  
};

module.exports = adminPostHandlers;
