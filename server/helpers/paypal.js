require("dotenv").config(); // Load environment variables
const paypal = require("paypal-rest-sdk"); // Import PayPal SDK

// Log the environment variables to check if they are being loaded correctly
console.log('PAYPAL_MODE:', process.env.PAYPAL_MODE);
console.log('PAYPAL_CLIENT_ID:', process.env.PAYPAL_CLIENT_ID);
console.log('PAYPAL_CLIENT_SECRET:', process.env.PAYPAL_CLIENT_SECRET);

// Check if the environment variables are available
if (!process.env.PAYPAL_MODE || !process.env.PAYPAL_CLIENT_ID || !process.env.PAYPAL_CLIENT_SECRET) {
  throw new Error("Missing PayPal environment variables: PAYPAL_MODE, PAYPAL_CLIENT_ID, or PAYPAL_CLIENT_SECRET.");
}

// Configure PayPal SDK
paypal.configure({
  mode: process.env.PAYPAL_MODE, // "sandbox" or "live"
  client_id: process.env.PAYPAL_CLIENT_ID, // PayPal Client ID
  client_secret: process.env.PAYPAL_CLIENT_SECRET, // PayPal Client Secret
});

module.exports = paypal; // Export PayPal SDK configuration
