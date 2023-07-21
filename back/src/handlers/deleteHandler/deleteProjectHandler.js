const {
  deleteProjecIdHandler,
  deleteProjectNameHandler,
} = require("../../controllers/deleteControllers/deleteProjectControllers");
//const { Article } = require("../db");

const deleteProjecIdHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteProject = await deleteProjectIdController(id);
    res.status(200).json(deleteProject);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteProjectNameHandler = async (req, res) => {
  try {
    const { name } = req.query;
    //console.log(name);
    const deleteProject = await deleteProjectNameController(name);
    return res.status(200).json(deleteProject);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  deleteProjectNameHandler,
  deleteProjecIdHandler,
};
