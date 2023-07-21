const express = requiere("express");
const { Router } = require("express");
const {
  deleteAdminNameHandler,
  deleteAdminIdHandler,
} = require("../../handlers/deleteHandler/deleteAdminHandler");

const deleteAdmin = Router();

deleteAdmin.delete("/name", deleteAdminNameHandler);
deleteAdmin.delete("/:id", deleteAdminIdHandler);

module.exports = deleteAdmin;
