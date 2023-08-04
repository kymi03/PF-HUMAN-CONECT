const { Router } = require("express");
const paymentsController = require("../../controllers/paymentsController/paymentsController");
const successController = require("../../controllers/paymentsController/successController");
const failureController = require("../../controllers/paymentsController/failureController");

const paymentRoutes = Router();

paymentRoutes.post("/", paymentsController);

paymentRoutes.get("/success", successController);
paymentRoutes.get("/failure", failureController);
paymentRoutes.get("/pending", (req, res) => {
  res.send("pending");
});
module.exports = paymentRoutes;
