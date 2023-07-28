// const express = require("express");
// const router = express.Router();
// const { newOrder, myOrders, singleOrder, getAllOrders, updateOrder, deleteOrder } = require("../controllers/orderController");
// const { isAuthenticatedUser, authorisedRoles } = require("../middleware/auth");

// Import statements for ES6 modules
import express from "express";
const router = express.Router();
import {
   newOrder,
   myOrders,
   singleOrder,
   getAllOrders,
   updateOrder,
   deleteOrder,
} from "../controllers/orderController.js";
import { isAuthenticatedUser, authorisedRoles } from "../middleware/auth.js";




router.route("/order/new").post(isAuthenticatedUser, newOrder)

router.route("/order/:id").get(isAuthenticatedUser, singleOrder)

router.route("/orders/me").get(isAuthenticatedUser, myOrders)

router.route("/admin/orders").get(isAuthenticatedUser, authorisedRoles("admin"), getAllOrders)

router.route("/admin/order/:id").put(isAuthenticatedUser, authorisedRoles("admin"), updateOrder)

router.route("/admin/order/:id").delete(isAuthenticatedUser, authorisedRoles("admin"), deleteOrder)


export default router;
