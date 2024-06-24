const express = require('express');
const { sendDonation, executeDonation } = require('../controllers/donationController');

const router = express.Router();

router.post('/send-donation', protect, sendDonation);
router.get('/execute-donation', protect, executeDonation);

module.exports = router;
