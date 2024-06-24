import React from 'react';
import DonationForm from './Donation/DonationForm';

const Profile = ({ user }) => (
    <div>
        <h1>{user.username}'s Profile</h1>
        <DonationForm receiverId={user._id} />
    </div>
);

export default Profile;
