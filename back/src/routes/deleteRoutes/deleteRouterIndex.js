const { Router } = require("express");
const deleteArticle = require("./deleteArticle");
const deleteDocumentary = require("./deleteDocumentary");
const deleteProject = require("./deleteProject");
const deleteAdmin = require("./deleteAdmin");
const deleteUser = require("./deleteUser");

const router = Router();
router.use("/deleteArticle", deleteArticle);
router.use("/deleteDocumentary", deleteDocumentary);
router.use("/deleteProject", deleteProject);
router.use("/deleteAdmin", deleteAdmin);
router.use("/deleteUser", deleteUser);

module.exports = router;
