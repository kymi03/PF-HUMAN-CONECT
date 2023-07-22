const articleModel = require("../../models/article");

const getArticlesHandler = async (req, res) => {
  const { name, id, location } = req.query;
  try {
    // En caso de que se reciban parametros por query estos serán utilizados para
    //filtrar la información de la base de datos
    const query = {};
    id && (query.id = id);
    name && (query.name = { $regex: new RegExp(name, "i") });
    location && (query.location = location);

    //se realiza la peticion a la base de datos y si todo sale bien se
    //responde con un arreglo de articulos
    if (query.id) {
      const articles = await articleModel.findById(id);
      articles
        ? res.status(200).json(articles)
        : res.status(404).json({
            error: `No se encontró el artículo con id: ${id}`,
          });
    } else {
      const articles = await articleModel.find(query);
      articles.length
        ? res.status(200).json(articles)
        : res.status(404).json({
            error: "No se encontraron artículos",
          });
    }
  } catch (error) {
    console.error("Error al requerir artículos", error);
    res.status(500).json({ error: "Error al requerir artículos", error });
  }
};

module.exports = getArticlesHandler;
