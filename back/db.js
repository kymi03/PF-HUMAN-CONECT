require("dotenv").config();
const { URL_DB } = process.env;
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/HumanConect")

  .then((db) => console.log("DB is connected"))
  .catch((err) => console.error(err));
