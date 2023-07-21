const User = require("../../models/user");

const deleteUserIdController = async (userId) => {
  try {
    const deleteUser = await User.findByIdAndRemove(userId);
    console.log(deleteUser);
    return deleteUser;
  } catch (error) {
    throw new Error("Error al eliminar el usuario por ID");
  }
};

//const deleteUserNameController = async (userName) => {
// try {
//   const deleteUser = await User.findOneAndRemove({ userName });
//   return deleteUser;
//  } catch (error) {
//   throw new Error("Error al eliminar el usuario por nombre");
// }
//};

module.exports = {
  deleteUserIdController,
  // deleteUserNameController,
};
