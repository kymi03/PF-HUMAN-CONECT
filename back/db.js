require("dotenv").config();
const { URL_DB, DB_PASSWORD, DB_HOST, DB_USER } = process.env;
const mongoose = require("mongoose");

//mongoose.connect("mongodb://127.0.0.1:27017/HumanConect")
const connectionString = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}.39yam2i.mongodb.net/WebPageInfo?retryWrites=true&w=majority`;

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = mongoose;
