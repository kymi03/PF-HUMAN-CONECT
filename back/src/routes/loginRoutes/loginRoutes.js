const { Router } = require("express");
const loginController = require("../../controllers/loginController/loginController");

const loginRoutes = Router();

loginRoutes.post("/", loginController);

module.exports = loginRoutes;