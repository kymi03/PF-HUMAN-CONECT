const adminModel = require("../../models/admin");

const getAdminHandler = async (req, res) => {
  const { name, adminId } = req.query;
  try {
    const query = {};
    if (name)
      query.name = {
        $regex: new RegExp(name, "i"),
      };
    if (adminId)
      query.adminId = {
        $regex: new RegExp(adminId, "i"),
      };
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
