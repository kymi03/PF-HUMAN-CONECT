const express = require("express");
const adminHandlers = require("../../../handlers/postHandlers/adminHandler");
const postAdmin = express.Router();

postAdmin.post("/", adminHandlers);

module.exports = postAdmin;