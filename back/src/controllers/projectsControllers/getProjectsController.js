const projectModel = require("./../../models/project");

const getProjectController = async (req, res) => {
  const { name, id, location, author } = req.query;
  try {
    // En caso de que se reciban parametros por query estos serán utilizados para
    //filtrar la información de la base de datos
    const query = {};
    id && (query.id = id);
    name && (query.name = { $regex: new RegExp(name, "i") });
    location && (query.location = location);
    author && (query.author = author);

    //se realiza la peticion a la base de datos y si todo sale bien se
    //responde con un arreglo de proyectos
    if (query.id) {
      const projects = await projectModel.findById(id);
      projects
        ? res.status(200).json(projects)
        : res.status(404).json({
            error: `No se encontró el proyecto con id: ${id}`,proyectos
          });
    } else {
      const projects = await projectModel.find(query);
      projects.length
        ? res.status(200).json(projects)
        : res.status(404).json({
            error: "No se encontraron proyectos",
          });
    }
  } catch (error) {
    console.error("Error al requerir proyectos", error);
    res.status(500).json({ error: "Error al requerir proyectos", error });
  }
};

module.exports = getProjectController;