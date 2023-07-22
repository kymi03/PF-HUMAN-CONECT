const { Router } = require("express");
const getAdminsHandler = require("../../controllers/adminsControllers/getAdminsController");
//const postArticlesHandler = require("../../handlers/articlesHandlers/postArticlesHandler");
// const putArticlesHandler = require("../../handlers/articlesHandlers/putArticlesHandler");
// const deleteArticlesHandler = require("../../handlers/articlesHandlers/deleteArticlesHandler");

const adminRoutes = Router();
//const postArticles = Router();
// const putArticles = Router();
// const deleteArticles = Router();

adminRoutes.get("/", getAdminsHandler);
//postArticles.use("/", postArticlesHandler);
// putArticles.use("/", putArticlesHandler);
// deleteArticles.use("/", deleteArticlesHandler);

module.exports = adminRoutes;
