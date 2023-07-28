import ErrorHandler from "../utils/errorHandler.js";

export default (err, req, res, next) => {
  err.message = err.message || "An unexpected error occurred. Please try again later";
  err.statusCode = err.statusCode || 500;

  // Wrong MongoDB id error
  if (err.name === "CastError") {
    const message = `Resource Not Found. Invalid: ${err.path}`;
    err = new ErrorHandler(message, 400);
  }

  // Mongoose duplicate key error
  // if (err.code === 11000) {
  //     const message = `Duplicate ${Object.keys(err.keyValue)} entered`;
  //     err = new ErrorHandler(message, 400);
  // }

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};