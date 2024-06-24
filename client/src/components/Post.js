import React from 'react';
import DonationForm from '../Donation/DonationForm';

const Post = ({ post }) => (
    <div className="post">
        <h2>{post.user.username}</h2>
        <p>{post.content}</p>
        <DonationForm receiverId={post.user._id} />
    </div>
);

export default Post;