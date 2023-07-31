const projectModel = require("../../models/project");

const postProjectController = async (req, res) => {
  const { name, title, media, body, author, breaf, date, location } = req.body;
  if (!media.images)
  media.images = {
    imageName:
      "Manifestantes anti-embalses se protegen de los gases lacrimógenos",
    imageUrl:
      "https://humanconet.org/wp-content/uploads/2023/04/Black-Blocks-1.png.webp",
  };
  if (!media.images)
  media.images = {
    imageName:
      "Manifestantes anti-embalses se protegen de los gases lacrimógenos",
    imageUrl:
      "https://humanconet.org/wp-content/uploads/2023/04/Black-Blocks-1.png.webp",
  };
  try {
    const newProject = new projectModel({
      name,
      title,
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