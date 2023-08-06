const { Router } = require("express");
const postCommentsController = require("../../controllers/commentsControllers/postCommentsController");
const getCommentsController = require("../../controllers/commentsControllers/getCommentsController");

const commentsRoutes = Router();

commentsRoutes.post("/", postCommentsController);
commentsRoutes.get("/", getCommentsController);

module.exports = commentsRoutes;
