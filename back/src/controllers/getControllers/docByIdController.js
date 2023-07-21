const docModel = require("../../models/documentary");
const docByIdController = async (id) => {
  try {
    const doc = await docModel.findById(id);
    return doc;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = docByIdController;
