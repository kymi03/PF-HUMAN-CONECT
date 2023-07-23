const { Router } = require("express");
const getAdminsHandler = require("../../controllers/adminsControllers/getAdminsController");
const postAdminsHandler = require("../../controllers/adminsControllers/postAdminsController");
const putAAdminsHandler = require("../../controllers/adminsControllers/putAdminsController");
const deleteAdminsHandler = require("../../controllers/adminsControllers/deleteAdminsController");

const adminRoutes = Router();

adminRoutes.get("/", getAdminsHandler);
adminRoutes.post("/", postAdminsHandler);
adminRoutes.put("/", putAAdminsHandler);
adminRoutes.delete("/", deleteAdminsHandler);

module.exports = adminRoutes;
