const adminModel = require("../../models/admin");

const getAdminHandler = async (req, res) => {
  const { id, name, lastName, email, phone } = req.query;
  try {
    const query = {};
    if (id) query._id = id;
    if (name) query.name = { $regex: new RegExp(name, "i") };
    if (lastName) query.lastName = { $regex: new RegExp(lastName, "i") };
    if (email) query.email = { $regex: new RegExp(email, "i") };
    if (phone) query.phone = phone;

    const admins = await adminModel.find(query);

    admins.length
      ? res.status(200).json(admins)
      : res.status(404).json({
          error: "No se encontraron los/el administrador",
        });
  } catch (error) {
    console.error("Error al requerir todos los administradores", error);
    res
      .status(500)
      .json({ error: "Error al requerir todos los administradores", error });
  }
};

module.exports = getAdminHandler;
