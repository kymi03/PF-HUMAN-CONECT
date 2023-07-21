const {
  deleteAdminIdController,
  deleteAdminNameController,
} = require("../../controllers/deleteControllers/deleteAdminControllers");

const deleteAdminIdHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteAdmin = await deleteAdminIdController(id);
    res.status(200).json(deleteAdmin);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteAdminNameHandler = async (req, res) => {
  try {
    const { name } = req.query;
    const deleteAdmin = await deleteAdminNameController(name);
    return res.status(200).json(deleteAdmin);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  deleteAdminNameHandler,
  deleteAdminIdHandler,
};
