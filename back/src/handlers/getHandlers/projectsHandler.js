const projectsController = require("../../controllers/getControllers/projectsController");
const projectsHandler = async (req, res) => {
    try {
      const project = await projectsController();
      project.length
        ? res.status(200).json(project)
        : res.status(404).json({
            error: "No se encontraron documentales",
          });
    } catch (error) {
      console.error("Error al requerir todos los proyectos", error);
      res
        .status(500)
        .json({ error: "Error al requerir todos los proyectos", error });
    }
  };
  
  module.exports = projectsHandler;