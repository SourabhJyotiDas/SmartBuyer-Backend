// const ErrorHandler = require("../utils/errorHandler");
// const jwt = require("jsonwebtoken");
// const User = require("../models/userModels");

// Import statements for ES6 modules
import ErrorHandler from "../utils/errorHandler.js";
import jwt from "jsonwebtoken";
import User from "../models/userModels.js";


export const isAuthenticatedUser = async function (req, res, next) {
    try {
        const { token } = req.cookies;
        if (!token) {
            return next(new ErrorHandler("please login to access this resource", 401))
        }
        const decodedData = await jwt.verify(token, process.env.JWT_SECRET)
        req.user = await User.findById(decodedData.id)
        next()
    } catch (error) {
        return next(new ErrorHandler(error.message, 500))
    }
}

export const authorisedRoles = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return next(
                new ErrorHandler(`Role: ${req.user.role} is not allowed to access this resouce`, 403)
            )
        }
        next();
    }
}