const paypal = require('paypal-rest-sdk');
const dotenv = require('dotenv');

dotenv.config();

paypal.configure({
    mode: 'sandbox', // or 'live'
    client_id: process.env.PAYPAL_CLIENT_ID,
    client_secret: process.env.PAYPAL_SECRET
});

module.exports = paypal;
