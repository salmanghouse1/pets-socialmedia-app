const express = require('express');
const { sendDonation, executeDonation } = require('../controllers/donationController');

const router = express.Router();


// send the donation
router.post('/send-donation', sendDonation);
router.get('/execute-donation', executeDonation);

module.exports = router;
