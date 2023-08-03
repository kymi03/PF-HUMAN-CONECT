const articleModel = require("../../models/article");

const putArticlesController = async (req, res) => {
  const {
    id,
    name,
    title,
    media,
    body,
    body2,
    body3,
    author,
    breaf,
    date,
    location,
    active,
  } = req.body;
  try {
    //Guardamos el articulo actualizado en la BD
    const updatedArticle = await articleModel.updateOne(
      { _id: id },
      {
        $set: {
          name,
          title,
          media,
          body,
          body2,
          body3,
          author,
          breaf,
          date,
          location,
          active,
        },
      }
    );
    if (updatedArticle.nModified === 0) {
      return res.status(404).json({ error: "Artículo no encontrado" });
    }
    res.status(200).json(updatedArticle);
  } catch (error) {
    console.error("Error al actualizar el artículo", error);
    res.status(500).json({ error: "Error al actualizar el artículo", error });
  }
};

module.exports = putArticlesController;
