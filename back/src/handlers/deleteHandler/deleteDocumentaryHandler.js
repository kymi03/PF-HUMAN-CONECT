const {
  deleteDocumentaryIdController,
  // deleteDocumentaryNameController,
} = require("../../controllers/deleteControllers/deleteDocumentaryControllers");
//const { Article } = require("../db");

const deleteDocumentaryIdHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteDocumentary = await deleteDocumentaryIdController(id);
    res.status(200).json(deleteDocumentary);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//const deleteDocumentaryNameHandler = async (req, res) => {
// try {
//   const { name } = req.query;
//  //console.log(name);
//  const deleteDocumentary = await deleteDocumentaryNameController(name);
//    return res.status(200).json(deleteDocumentary);
//  } catch (error) {
//    res.status(400).json({ error: error.message });
//  }
//};

module.exports = {
  // deleteDocumentaryNameHandler,
  deleteDocumentaryIdHandler,
};
