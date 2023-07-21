const Admin = require("../../models/admin");

const deleteAdminIdController = async (adminId) => {
  try {
    const deleteAdmin = await Admin.findByIdAndRemove(adminId);
    return deleteAdmin;
  } catch (error) {
    throw new Error("Error al eliminar el administrador por ID");
  }
};

const deleteAdminNameController = async (adminName) => {
  try {
    const deleteAdmin = await Admin.findOneAndRemove({ adminName });
    return deleteAdmin;
  } catch (error) {
    throw new Error("Error al eliminar el administrador por nombre");
  }
};

module.exports = {
  deleteAdminIdController,
  deleteAdminNameController,
};
