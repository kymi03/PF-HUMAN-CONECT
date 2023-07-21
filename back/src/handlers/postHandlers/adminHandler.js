const adminController = require("../../controllers/postControllers/adminController");

const adminHandlers = async (req, res) => {
  try {
    const { adminName, adminLastName, adminEmail, adminPhone } = req.body;
    if(!(adminName && adminLastName && adminEmail && adminPhone)) {
        return res.status(400).send('Faltan datos para poder crear el administrador');
    }


    adminController();

    res.status(200).json("newAdmin")
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
};





module.exports = adminHandlers;
