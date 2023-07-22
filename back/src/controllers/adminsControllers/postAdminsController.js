const AdminModel = require("../../models/admin");

const postAdminHandler = async (req, res) => {
  const { name, lastName, email, password, phone } = req.body;

  try {
    const newAdmin = new AdminModel({
      name,
      lastName,
      email,
      password,
      phone,
    });

    await newAdmin.save();

    res.status(201).json(newAdmin);
  } catch (error) {
    console.error("Error al crear el administrador", error);
    res.status(500).json({ error: "Error al crear el administrador", error });
  }
};

module.exports = postAdminHandler;
