const adminPostController = require("../../controllers/postControllers/adminPostController");

const adminPostHandlers = async (req, res) => {

  const fxAdminHandler = adminPostController(req.body);

  if(fxAdminHandler) {
    return res.status(200).json('Admin creado');
  }
  res.status(500).json('Error al crear el admin')
};

module.exports = adminPostHandlers;
