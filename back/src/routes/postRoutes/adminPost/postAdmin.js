const express = require("express");
const adminPostHandlers = require("../../../handlers/postHandlers/adminPostHandler");
const postAdmin = express.Router();

postAdmin.post("/", adminPostHandlers);

module.exports = postAdmin;