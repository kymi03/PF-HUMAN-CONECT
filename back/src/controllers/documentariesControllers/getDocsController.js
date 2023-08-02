const documentaryModel = require("../../models/documentary");

const getDocumentaryHandler = async (req, res) => {
  const { name, id, location, author, title } = req.query;
  try {
    // En caso de que se reciban parametros por query estos serán utilizados para
    //filtrar la información de la base de datos
    const query = {};
    name && (query.name = { $regex: new RegExp(name, "i") });
    id && (query.id = id);
    location && (query.location = location);
    author && (query.author = author);
    title && (query.title = title);

    //se realiza la peticion a la base de datos y si todo sale bien se
    //responde con un arreglo de articulos
    if (query.id) {
      const documentaries = await documentaryModel.findById(id);
      documentaries
        ? res.status(200).json(documentaries)
        : res.status(404).json({
            error: `No se encontró el documental con id: ${id}`,
          });
    } else {
      const documentaries = await documentaryModel.find(query);
      documentaries.length
        ? res.status(200).json(documentaries)
        : res.status(404).json({
            error: "No se encontraron los documentales",
          });
    }
  } catch (error) {
    console.error("Error al requerir el documental", error);
    res.status(500).json({ error: "Error al requerir documental", error });
  }
};

module.exports = getDocumentaryHandler;
