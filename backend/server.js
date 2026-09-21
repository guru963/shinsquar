const express = require("express");
const cors = require("cors");
const config = require("./config");
const webhookRoutes = require("./routes/webhookRoutes");
const errorHandler = require("./middleware/errorHandler");

const app = express();

// Middlewares
app.use(cors());

// Configure Express JSON parser to capture the raw body (required for signature verification)
app.use(
  express.json({
    verify: (req, res, buf) => {
      req.rawBody = buf;
    },
  })
);

// Basic request logging middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  next();
});

// Health check endpoint (useful for deployment platforms like Vercel, Render, AWS, etc.)
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    timestamp: new Date().toISOString(),
    env: {
      phoneNumberIdConfigured: !!config.whatsappPhoneNumberId && config.whatsappPhoneNumberId !== "your_phone_number_id",
      verifyTokenConfigured: !!config.whatsappVerifyToken,
      accessTokenConfigured: !!config.whatsappAccessToken && config.whatsappAccessToken !== "your_permanent_access_token",
      appSecretConfigured: !!config.whatsappAppSecret,
    },
  });
});

// Mount Webhook API routes
app.use("/", webhookRoutes);

// Global centralized error handling middleware
app.use(errorHandler);

// Start server listening
app.listen(config.port, () => {
  console.log(`==================================================`);
  console.log(`🚀 Shinsquare WhatsApp Backend Server Running`);
  console.log(`   Port:         ${config.port}`);
  console.log(`   Health Check: http://localhost:${config.port}/health`);
  console.log(`   Webhook URL:  http://localhost:${config.port}/webhook`);
  console.log(`==================================================`);
});