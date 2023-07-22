const documentaryModel = require("../../models/documentary");

const postDocumentaryHandler = async (req, res) => {
  const { name, media, body, author, breaf, date, location } = req.body;

  try {
    const newDocumentary = new documentaryModel({
      name,
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
