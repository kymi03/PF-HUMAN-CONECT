const { Router } = require("express");
const deleteArticle = require("./articleRoutes");
const deleteDocumentary = require("./documentaryRoutes");
const deleteProject = require("./projectRoutes");

const router = Router();
router.use("/deleteArticle", deleteArticle);
router.use("/deleteDocumentary", deleteDocumentary);
router.use("/deleteProject", deleteProject);

module.exports = router;
