const { Router } = require("express");
const paymentsController = require("../../controllers/paymentsController/paymentsController");
const webHookController = require("../../controllers/paymentsController/webHookController");

const paymentRoutes = Router();

paymentRoutes.post("/", paymentsController);

paymentRoutes.get("/success", (req, res) => {
  res.send("success");
});
paymentRoutes.get("/failure", (req, res) => {
  res.send("failure");
});
paymentRoutes.get("/pending", (req, res) => {
  res.send("pending");
});
paymentRoutes.get("/webhook", webHookController);

module.exports = paymentRoutes;
