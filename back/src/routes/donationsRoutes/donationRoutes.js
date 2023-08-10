const { Router } = require("express");
const getDonationsControllers = require("../../controllers/donationsControllers/getDonatiosController");

const donationRoutes = Router();

donationRoutes.get("/", getDonationsControllers);

module.exports = donationRoutes;
