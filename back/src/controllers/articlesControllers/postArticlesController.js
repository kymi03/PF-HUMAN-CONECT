const articleModel = require("../../models/article");

const postArticlesController = async (req, res) => {
  const { name, media, body, author, breaf, date, location } = req.body;
  if (!media.images)
    media.images = {
      imageName:
        "Manifestantes anti-embalses se protegen de los gases lacrimógenos",
      imageUrl:
        "https://humanconet.org/wp-content/uploads/2023/04/Black-Blocks-1.png.webp",
    };
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
    console.error("Error al crear el artículo", error);
    res.status(500).json({ error: "Error al crear el artículo", error });
  }
};

module.exports = postArticlesController;
