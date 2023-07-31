const documentaryModel = require("../../models/documentary");

const postDocumentaryHandler = async (req, res) => {
  const { name, title, media, body, author, breaf, date, location } = req.body;
  if (!media.images)
  media.images = {
    imageName:
      "Manifestantes anti-embalses se protegen de los gases lacrimógenos",
    imageUrl:
      "https://humanconet.org/wp-content/uploads/2023/04/Black-Blocks-1.png.webp",
  };
  try {
    const newDocumentary = new documentaryModel({
      name,
      title,
      media,
      body,
      author,
      breaf,
      date,
      location,
    });

    await newDocumentary.save();

    res.status(201).json(newDocumentary);
  } catch (error) {
    console.error("Error al crear el documental", error);
    res.status(500).json({ error: "Error al crear el documental", error });
  }
};

module.exports = postDocumentaryHandler;
