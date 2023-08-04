const { Router } = require("express");
const getUserController = require("../../controllers/usersControllers/getUserController");
const postUserController = require('../../controllers/usersControllers/postUserController');
const putUserController = require('../../controllers/usersControllers/putUserController');
const deleteUserController = require('../../controllers/usersControllers/deleteUserController');
const getAllUsersController = require ("../../controllers/usersControllers/getAllUsersController")

const userRoutes = Router();


userRoutes.get("/", getUserController);
userRoutes.get("/all", getAllUsersController); 
userRoutes.post("/", postUserController);
userRoutes.put("/", putUserController);
userRoutes.delete("/", deleteUserController);


module.exports = userRoutes;