const articleController = require("../../controllers/getControllers/articleController");
const { MongoClient } = require("mongodb");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const connectionString = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}.39yam2i.mongodb.net/WebPageInfo?retryWrites=true&w=majority`;
const client = new MongoClient(connectionString);
const db = client.db("WebPageInfo");
const collection = db.collection("articles");

const articleHandles = async (req, res) => {
  try {
    await client.connect();
    const articles = await articleController(collection, client);
    articles.length
      ? res.status(200).json(articles)
      : res.status(404).json({
          error: "No se encontraron artículos",
        });
  } catch (error) {
    console.error(`Error al requerir todos los artículos `, error);
    res
      .status(500)
      .json({ error: `Error al requerir todos los artículos `, error });
  }
};
module.exports = articleHandles;
