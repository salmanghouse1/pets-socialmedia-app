import React from 'react';
import DonationForm from '../Donation/DonationForm';
import 'bulma/css/bulma.min.css';





const Post = ({ post }) => {

<div className="post">
<div className="card">
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img src="https://via.placeholder.com/300" alt="Placeholder image" />
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-left">
                            <figure className="image is-48x48">
                                <img src="https://via.placeholder.com/96" alt="Placeholder image" />
                            </figure>
                        </div>
                        <div className="media-content">
                        <h2>{post.user}</h2>
                        </div>
                    </div>
    
                    <div className="content">
                    <p>{post.text}</p>
                    <br />
                        <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                    </div>
                </div>
            </div>

        {/* <DonationForm receiverId={post.user.} /> */}
</div>

};
    

export default Post;