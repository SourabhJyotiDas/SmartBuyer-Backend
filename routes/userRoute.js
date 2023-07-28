// const express = require("express");
// const router = express.Router();
// const { registerUser, loginUser, logout, forgotPassword, resetPassword, getUserDetails, updatePassword, updateProfile, getAllUser, getSingleUser, deleteUser, updateUserRole } = require("../controllers/userController");
// const { isAuthenticatedUser, authorisedRoles } = require("../middleware/auth");


// Import statements for ES6 modules
import express from "express";
const router = express.Router();
import {
  registerUser,
  loginUser,
  logout,
  forgotPassword,
  resetPassword,
  getUserDetails,
  updatePassword,
  updateProfile,
  getAllUser,
  getSingleUser,
  deleteUser,
  updateUserRole,
} from "../controllers/userController.js";
import { isAuthenticatedUser, authorisedRoles } from "../middleware/auth.js";



router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

router.route("/password/forgot").post(forgotPassword);

router.route("/password/reset/:token").put(resetPassword);

router.route("/logout").get(logout);

router.route("/me").get(isAuthenticatedUser,getUserDetails);

router.route("/password/update").put(isAuthenticatedUser,updatePassword);

router.route("/me/update").put(isAuthenticatedUser,updateProfile);

router.route("/admin/users").get(isAuthenticatedUser,authorisedRoles("admin"),getAllUser);

router.route("/admin/user/:id").get(isAuthenticatedUser,authorisedRoles("admin"),getSingleUser);

router.route("/admin/user/:id").put(isAuthenticatedUser,authorisedRoles("admin"),updateUserRole);

router.route("/admin/user/:id").delete(isAuthenticatedUser,authorisedRoles("admin"),deleteUser);

export default router;