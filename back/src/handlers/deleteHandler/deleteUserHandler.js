const {
  deleteUserIdController,
  deleteUserNameController,
} = require("../../controllers/deleteControllers/deleteUserControllers");

const deleteUserIdHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUser = await deleteUserIdController(id);
    res.status(200).json(deleteUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteUserNameHandler = async (req, res) => {
  try {
    const { name } = req.query;
    const deleteUser = await deleteUserNameController(name);
    return res.status(200).json(deleteUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  deleteUserNameHandler,
  deleteUserIdHandler,
};
