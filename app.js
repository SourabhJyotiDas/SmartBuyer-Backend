// const express = require("express")
// const app = express();
// const errorMiddleware = require("./middleware/error");
// const cookieParser = require("cookie-parser");
// const bodyParser = require("body-parser")
// const fileUpload = require("express-fileupload");
// const dotenv = require("dotenv");
// const cors = require('cors');



// Import statements for ES6 modules
import express from "express";
import errorMiddleware from "./middleware/error.js";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import fileUpload from "express-fileupload";
import dotenv from "dotenv";
import cors from "cors";

const app = express()

// config
dotenv.config({ path: "config/config.env" })


app.use(cors())
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(fileUpload());







// app.use(express.static(path.join(__dirname, "client", 'build')))    // deploy only

// app.use('/', async (req, res) => {
//    res.sendFile(path.join(__dirname, "client", 'build', 'index.html'))  // deploy only
// });







// route Imports
// Import statements for ES6 modules

import product from "./routes/productRoute.js";
import user from "./routes/userRoute.js";
import order from "./routes/orderRoute.js";
import payment from "./routes/paymentRoute.js";


app.use("/api/v1", product)
app.use("/api/v1", user)
app.use("/api/v1", order)
app.use("/api/v1", payment)


// Middleware for error
app.use(errorMiddleware)

export default app;