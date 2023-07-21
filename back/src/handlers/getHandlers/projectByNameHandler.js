const projectByNameController = require("../../controllers/getControllers/projectByNameController");
const projectByNameHandler = async (req, res) => {
  const { name } = req.params;
  try {
    const project = await projectByNameController(name);
    project
      ? res.status(200).json(project)
      : res.status(404).json({
          error: `No se encontró el proyecto ${name}`,
        });
  } catch (error) {
    console.error(`Error al requerir el proyecto ${name}`, error);
    res
      .status(500)
      .json({ error: `Error al requerir el proyecto ${name}`, error });
  }
};
module.exports = projectByNameHandler;
