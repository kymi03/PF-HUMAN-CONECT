const { Router } = require("express");
const deleteArticle = require("./deleteArticle");
const deleteDocumentary = require("./deleteDocumentary");
const deleteProject = require("./deleteProject");
const deleteAdmin = require("./deleteAdmin");
const deleteUser = require("./deleteUser");

const router = Router();
router.use("/article", deleteArticle);
router.use("/documentary", deleteDocumentary);
router.use("/project", deleteProject);
router.use("/admin", deleteAdmin);
router.use("/user", deleteUser);

module.exports = router;
