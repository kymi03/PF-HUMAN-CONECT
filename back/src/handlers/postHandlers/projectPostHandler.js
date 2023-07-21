const projectPostController = require("../../controllers/postControllers/projectPostController");
const project = require('../../models/project')


const projectPostHandlers = async (req, res) => {
  try{
    const fxProjectHandler = await projectPostController(req.body);

    // const adminData = new admin(req.body);

    // adminData.save();

    // res.status(200).json('admin creado')
  if(fxProjectHandler) {
    return res.status(200).json('Proyecto creado');

  }

  }catch(error){

    res.status(500).json('Error al crear el proyecto')
  }
  
};

module.exports = projectPostHandlers;
