import React, { useState } from 'react';
import axios from 'axios';

const DonationForm = ({ receiverId }) => {
    const [amount, setAmount] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/v1/donations/send-donation', { amount, receiverId });
            window.location.href = res.data.forwardLink;
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
            <button type="submit">Donate</button>
        </form>
    );
};

export default DonationForm;
