const projectByIdController = require("../../controllers/getControllers/projectByIdController")

const projectByIdHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const project = await projectByIdController(id);
    project
      ? res.status(200).json(project)
      : res.status(404).json({
          error: `No se encontró el proyecto con el id:  ${id}`,
        });
  } catch (error) {
    console.error(`Error al requerir el proyecto con el id: ${id}`, error);
    res
      .status(500)
      .json({ error: `Error al requerir el proyecto con el id: ${id}`, error });
  }
};
module.exports = projectByIdHandler;