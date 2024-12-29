const paypal = require("paypal-rest-sdk"); // Import PayPal SDK

// Configure PayPal SDK
paypal.configure({
  mode: "sandbox", // Use "sandbox" or "live" based on your environment
  client_id: "AfixF2u6YvdBL-ZbWY1DhbQmFAsO4mSLUZmr5DaE3CVbMu8oh8DYc7jRytPs9_A-RHEBtu3beVRqChPI", // PayPal Client ID
  client_secret: "EMsrMg0CufBOjwlTIDNKhieTs2BMbk5MW0v4lMfw02Q7HZ7whupvQ0CJ5gcuDMv7_2KHXRcqz5g5ssTd", // PayPal Client Secret
});

module.exports = paypal; // Export PayPal SDK configuration
