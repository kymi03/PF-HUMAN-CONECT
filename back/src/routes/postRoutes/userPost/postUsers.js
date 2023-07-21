const express = require("express");
const userPostHandlers = require("../../../handlers/postHandlers/userPostHandler");
const postUser = express.Router();

postUser.post("/", userPostHandlers);

module.exports = postUser;