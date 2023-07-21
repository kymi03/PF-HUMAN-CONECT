const articleModle = require("../../models/article");
const articleController = async () => {
  try {
    const articles = await articleModle.find({});
    return articles;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = articleController;

