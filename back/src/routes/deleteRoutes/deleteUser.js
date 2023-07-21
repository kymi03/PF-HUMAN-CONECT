const express = requiere("express");
const { Router } = require("express");
const {
  deleteUserNameHandler,
  deleteUserIdHandler,
} = require("../../handlers/deleteHandler/deleteUserHandler");

const deleteUser = Router();

deleteUser.delete("/name", deleteUserNameHandler);
deleteUser.delete("/:id", deleteUserIdHandler);

module.exports = deleteUser;
