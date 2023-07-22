const articleModel = require("../../models/article");

const postArticlesController = async (req, res) => {
  const { name, media, body, author, breaf, date, location } = req.body;

  try {
    const newArticle = new articleModel({
      name,
      media,
      body,
      author,
      breaf,
      date,
      location,
    });

    await newArticle.save();

    res.status(201).json(newArticle);
  } catch (error) {
    console.error("Error al crear el documental", error);
    res.status(500).json({ error: "Error al crear el documental", error });
  }
};

module.exports = postArticlesController;