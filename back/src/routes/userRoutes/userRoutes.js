const { Router } = require("express");
const getUserController = require("../../controllers/usersControllers/getUserController");
const postUserController = require("../../controllers/usersControllers/postUserController");
const putUserController = require("../../controllers/usersControllers/putUserController");
const deleteUserController = require("../../controllers/usersControllers/deleteUserController");
const getAllUsersController = require("../../controllers/usersControllers/getAllUsersController");
const postUserCommentController = require("../../controllers/usersControllers/postUserCommentController");
const getUserCommentController = require("../../controllers/usersControllers/getUserCommentController");

const userRoutes = Router();

userRoutes.get("/", getUserController);
userRoutes.get("/all", getAllUsersController);
userRoutes.post("/", postUserController);
userRoutes.put("/", putUserController);
userRoutes.delete("/", deleteUserController);
userRoutes.post("/coments", postUserCommentController);
userRoutes.get("/allcoments", getUserCommentController);

module.exports = userRoutes;
module.exports = userRoutes;
