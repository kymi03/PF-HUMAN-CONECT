const articleModel = require("../../models/article");
const articleByNameController = async (name) => {
    try {
        const article = await articleModel.findOne({name});
        return article;
      } catch (error) {
        throw new Error(error);
      }
}

module.exports = articleByNameController;