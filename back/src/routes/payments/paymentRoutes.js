const { Router } = require("express");
const paymentsController = require("../../controllers/paymentsController/paymentsController");
const successController = require("../../controllers/paymentsController/successController");

const paymentRoutes = Router();

paymentRoutes.post("/", paymentsController);

paymentRoutes.get("/success", successController);
paymentRoutes.get("/failure", (req, res) => {
  res.send("failure");
});
paymentRoutes.get("/pending", (req, res) => {
  res.send("pending");
});
module.exports = paymentRoutes;
