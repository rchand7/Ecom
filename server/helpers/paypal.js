require("dotenv").config(); // Load environment variables
const paypal = require("paypal-rest-sdk"); // Import PayPal SDK

// Configure PayPal SDK
paypal.configure({
  mode: process.env.PAYPAL_MODE, // "sandbox" or "live"
  client_id: process.env.PAYPAL_CLIENT_ID, // PayPal Client ID
  client_secret: process.env.PAYPAL_CLIENT_SECRET, // PayPal Client Secret
});

module.exports = paypal; // Export PayPal SDK configuration
