const successController = (req, res) => {
  const query = req.query;
  res.status(200).json(query);
};
module.exports = successController;
