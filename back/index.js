require("dotenv").config();
const PORT = process.env.PORT || 3001;
const app = require("./app");
const { mongoose } = require("./db");
const a = 0;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server raised in port: ${PORT || 3001}`);
});
