const Documentary = require("../../models/documentary");

const deleteDocumentaryIdController = async (documentaryId) => {
  try {
    const deleteDocumentary = await Documentary.findByIdAndRemove(
      documentaryId
    );
    return deleteDocumentary;
  } catch (error) {
    throw new Error("Error al eliminar el documental por ID");
  }
};

const deleteDocumentaryNameController = async (documentaryName) => {
  try {
    const deleteDocumentary = await Documentary.findOneAndRemove({
      documentaryName,
    });
    return deleteDocumentary;
  } catch (error) {
    throw new Error("Error al eliminar el documental por nombre");
  }
};

module.exports = {
  deleteDocumentaryIdController,
  deleteDocumentaryNameController,
};
