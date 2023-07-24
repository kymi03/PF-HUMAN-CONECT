const documentaryModel = require("../../models/documentary");

const putDocumentaryHandler = async (req, res) => {
  const { id, name, media, body, author, breaf, date, location } = req.body;
  if (!media.images)
  media.images = {
    imageName:
      "Manifestantes anti-embalses se protegen de los gases lacrimógenos",
    imageUrl:
      "https://humanconet.org/wp-content/uploads/2023/04/Black-Blocks-1.png.webp",
  };
  try {
    //Guardamos el articulo actualizado en la BD
    const putDocumentary = await documentaryModel.updateOne(
      { _id: id },
      { $set: { name, media, body, author, breaf, date, location } }
    );
    if (putDocumentary.nModified === 0) {
      return res.status(404).json({ error: "Documental no encontrado" });
    }
    res.status(200).json(putDocumentary);
  } catch (error) {
    console.error("Error al actualizar el documental", error);
    res.status(500).json({ error: "Error al actualizar el documental", error });
  }
};

module.exports = putDocumentaryHandler;
