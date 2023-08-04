const user = require("../../models/user");

const postUserCommentController = async (req, res) => {
  const { userId } = req.query;
  const { postBody } = req.body;
  console.log(postBody);
  try {
    // Busca al usuario por su ID
    const userRecord = await user.findById(userId);
    console.log(userRecord, "AQUI");
    // Si el usuario no existe, retorna un error
    if (!userRecord) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    // Crea un nuevo post y lo añade a los posts del usuario
    const newPost = {
      body: postBody,
      //createdAt: new Date(), // Este campo se generará automáticamente en MongoDB
    };

    userRecord.posts.post.push(newPost);

    // Guarda el usuario con su nuevo post
    await userRecord.save();

    // Retorna el post recién creado
    return res.status(201).json(newPost);
  } catch (error) {
    console.error("Error al guardar el post", error);
    return res.status(500).json({ error: "Error al guardar el post", error });
  }
};

module.exports = postUserCommentController;
