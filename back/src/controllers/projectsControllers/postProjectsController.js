const projectModel = require("../../models/project");

const postProjectController = async (req, res) => {
  const { name, media, body, author, breaf, date, location } = req.body;

  try {
    const newProject = new projectModel({
      name,
      media,
      body,
      author,
      breaf,
      date,
      location,
    });

    await newProject.save();

    res.status(201).json(newProject);
  } catch (error) {
    console.error("Error al crear el proyecto", error);
    res.status(500).json({ error: "Error al crear el proyecto", error });
  }
};

module.exports = postProjectController;