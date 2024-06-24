const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
    sender: { type: mongoose.Schema.Types.String, ref: 'User', required: true },
    receiver: { type: mongoose.Schema.Types.String, ref: 'User', required: true },
    amount: { type: Number, required: true },
    timestamp: { type: Date, default: Date.now },
});

const Donation = mongoose.model('Donation', donationSchema);

module.exports = Donation;
