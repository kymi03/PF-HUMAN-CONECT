const adminModel = require("../../models/admin");

const putAdminHandler = async (req, res) => {
  const { id, name, lastName, email, password, phone } = req.body;
  try {
    // Actualizamos el administrador en la BD
    const putAdmin = await adminModel.updateOne(
      { _id: id },
      { $set: { name, lastName, email, password, phone } }
    );
    if (putAdmin.nModified === 0) {
      return res.status(404).json({ error: "Administrador no encontrado" });
    }
    res.status(200).json(putAdmin);
  } catch (error) {
    console.error("Error al actualizar al administrador", error);
    res
      .status(500)
      .json({ error: "Error al actualizar el administrador", error });
  }
};

module.exports = putAdminHandler;
