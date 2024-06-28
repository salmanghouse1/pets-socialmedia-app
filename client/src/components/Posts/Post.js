import React from 'react';
import DonationForm from '../Donation/DonationForm';

const Post = ({ post }) => (
    <div className="post">
        <h2>{post.user}</h2>
        <p>{post.text}</p>
        {/* <DonationForm receiverId={post.user.} /> */}
    </div>
);

export default Post;