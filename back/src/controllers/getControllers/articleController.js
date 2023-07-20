const articleController = async (collection, client) => {
  try {
    await client.connect();
    const articles = await collection.find({}).toArray();
    return articles;
  } catch (error) {
    throw new Error(error);
  } finally {
    client.close();
  }

};
module.exports = articleController;
