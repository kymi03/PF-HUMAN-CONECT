const { Router } = require("express");
const postCommentsController = require("../../controllers/commentsControllers/postCommentsController");
const getCommentsController = require("../../controllers/commentsControllers/getCommentsController");
const putCommentsController = require("../../controllers/commentsControllers/putCommentsController");
const deleteCommentsController = require("../../controllers/commentsControllers/deleteCommentsController");

const commentsRoutes = Router();

commentsRoutes.post("/", postCommentsController);
commentsRoutes.get("/", getCommentsController);
commentsRoutes.put("/", putCommentsController);
commentsRoutes.delete("/", deleteCommentsController);

module.exports = commentsRoutes;
