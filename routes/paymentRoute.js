// const express = require("express");
// const {processPayment,sendStripeApiKey,} = require("../controllers/paymentController");
// const router = express.Router();
// const { isAuthenticatedUser } = require("../middleware/auth");

// Import statements for ES6 modules
import express from "express";
import { processPayment, sendStripeApiKey } from "../controllers/paymentController.js";
const router = express.Router();
import { isAuthenticatedUser } from "../middleware/auth.js";

router.route("/payment/process").post(isAuthenticatedUser, processPayment);

router.route("/stripeapikey").get(isAuthenticatedUser, sendStripeApiKey);

export default router;