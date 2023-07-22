const { Router } = require("express");
const getUserController = require("../../controllers/usersControllers/getUserController");


const userRoutes = Router();


userRoutes.get("/", getUserController);


module.exports = userRoutes;