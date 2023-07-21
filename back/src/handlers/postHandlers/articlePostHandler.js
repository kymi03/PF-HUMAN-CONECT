const articlePostController = require("../../controllers/postControllers/articlePostController");
const article = require('../../models/article')


const articlePostHandlers = async (req, res) => {
  try{
    const fxArticleHandler = await articlePostController(req.body);

    // const adminData = new admin(req.body);

    // adminData.save();

    // res.status(200).json('admin creado')
  if(fxArticleHandler) {
    return res.status(200).json('Articulo creado');

  }

  }catch(error){

    res.status(500).json('Error al crear el articulo')
  }
  
};

module.exports = articlePostHandlers;
