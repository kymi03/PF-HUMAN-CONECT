const Donation = require("../../models/donation");
const getDonationsControllers = async (req, res) => {
  const { userID  } = req.query;
  let query = {};
  userID && (query.owner = userID);

  try {
    //Busca y devuelve todas las donaciones de la BD
    const allDonations = await Donation.find(query);
    res.status(200).json(allDonations);
  } catch (error) {
    res
      .status(500)
      .json({ error: `Error al obtener las donaciones. Error: ${error}` });
  }
};
module.exports = getDonationsControllers;
