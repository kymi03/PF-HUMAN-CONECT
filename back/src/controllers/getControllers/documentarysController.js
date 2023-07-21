const ducModels = require("../../models/documentary");
const documentarysController = async () => {
  try {
    const documentarys = await ducModels.find({});
    return documentarys;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = documentarysController;