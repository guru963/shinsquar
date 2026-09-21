/**
 * Centralized Express Error Handler Middleware.
 * Captures all errors, logs stack trace, and returns formatted JSON response.
 */
function errorHandler(err, req, res, next) {
  console.error(`[Global Error Handler]:`, err.stack || err);

  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  res.status(statusCode).json({
    error: {
      message,
      status: statusCode,
      // Provide stack trace only in non-production environments
      ...(process.env.NODE_ENV !== "production" && { stack: err.stack })
    }
  });
}

module.exports = errorHandler;
