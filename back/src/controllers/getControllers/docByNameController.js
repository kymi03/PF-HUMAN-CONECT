const docModel = require("../../models/documentary");
const docByNameController = async (name) => {
    try {
        const doc = await docModel.findOne({name});
        return doc;
      } catch (error) {
        throw new Error(error);
      }
}

module.exports = docByNameController;