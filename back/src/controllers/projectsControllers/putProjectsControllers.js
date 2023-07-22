const projectModel = require("./../../models/project");

const putProjectsController = async (req, res) => {
  const { id, name, media, body, author, breaf, date, location } = req.body;
  try {
    //Guardamos el proyecto actualizado en la BD
    const updatedProject = await projectModel.updateOne(
      { _id: id },
      { $set: { name, media, body, author, breaf, date, location } }
    );
    if (updatedProject.nModified === 0) {
      return res.status(404).json({ error: "Proyecto no encontrado" });
    }
    res.status(200).json(updatedProject);
  } catch (error) {
    console.error("Error al actualizar el proyecto", error);
    res.status(500).json({ error: "Error al actualizar el proyecto", error });
  }
};

module.exports = putProjectsController;