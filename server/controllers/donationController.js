const paypal = require('paypal-rest-sdk');
const User = require('../models/User');

paypal.configure({
    mode: 'sandbox', // 'sandbox' or 'live'
    client_id: process.env.PAYPAL_CLIENT_ID,
    client_secret: process.env.PAYPAL_CLIENT_SECRET,
});

exports.sendDonation = async (req, res) => {
    const { amount, receiverId } = req.body;

    const receiver = await User.findById(receiverId);
    if (!receiver) {
        return res.status(404).json({ status: 'fail', message: 'Receiver not found' });
    }

    const create_payment_json = {
        intent: 'sale',
        payer: {
            payment_method: 'paypal',
        },
        redirect_urls: {
            return_url: 'http://localhost:3000/api/v1/donations/execute-donation',
            cancel_url: 'http://localhost:3000/cancel',
        },
        transactions: [
            {
                item_list: {
                    items: [
                        {
                            name: 'Donation',
                            sku: '001',
                            price: amount,
                            currency: 'USD',
                            quantity: 1,
                        },
                    ],
                },
                amount: {
                    currency: 'USD',
                    total: amount,
                },
                payee: {
                    email: receiver.paypalEmail,
                },
                description: 'Donation to user',
            },
        ],
    };

    paypal.payment.create(create_payment_json, (error, payment) => {
        if (error) {
            console.error(error);
            res.status(500).json({ status: 'fail', message: 'Error creating PayPal payment' });
        } else {
            const forwardLink = payment.links.find((link) => link.rel === 'approval_url');
            res.status(200).json({ status: 'success', forwardLink: forwardLink.href });
        }
    });
};

exports.executeDonation = (req, res) => {
    const payerId = req.query.PayerID;
    const paymentId = req.query.paymentId;

    const execute_payment_json = {
        payer_id: payerId,
    };

    paypal.payment.execute(paymentId, execute_payment_json, (error, payment) => {
        if (error) {
            console.error(error.response);
            res.status(500).json({ status: 'fail', message: 'Error executing PayPal payment' });
        } else {
            res.status(200).json({ status: 'success', message: 'Donation successful', payment });
        }
    });
};
