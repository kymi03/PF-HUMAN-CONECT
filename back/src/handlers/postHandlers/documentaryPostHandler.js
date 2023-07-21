const documentaryPostController = require("../../controllers/postControllers/documentaryPostController");
const documentary = require('../../models/documentary')


const documentaryPostHandlers = async (req, res) => {
  try{
    const fxDocumentaryHandler = await documentaryPostController(req.body);

    // const adminData = new admin(req.body);

    // adminData.save();

    // res.status(200).json('admin creado')
  if(fxDocumentaryHandler) {
    return res.status(200).json('Documental creado');

  }

  }catch(error){

    res.status(500).json('Error al crear el documental')
  }
  
};

module.exports = documentaryPostHandlers;
