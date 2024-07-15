import React, { useEffect, useState } from 'react';

import Post from './Post';

const PostList = () => {
    const [posts, setPosts] = useState([]);
    

    useEffect(() => {
        const fetchPosts = async () => {
          
            try {
                const response = await fetch('/api/v1/posts/')
        
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                
                const jsonData = await response.json()
                // const sampleData = [
                //     { _id: '1', user: 'user 1', text: 'This is the content of the first post.' },
                //     { _id: '2', user: 'user 2', text: 'This is the content of the second post.' },
                //     { _id: '3', user: 'user 3', text: 'This is the content of the third post.' }
                // ];
                setPosts(jsonData);
            } catch (err) {
                console.error('There was an error making the request:', err);
            }
        };
            // Example usage:
            fetchPosts();

         
    }, []);
     

    return (
        <div className="post-list">
            <h2>Posts</h2>
            <p></p>
            <ul>
<li>

{posts.length > 0 ? (
                posts.map(post => (
                    
<div className="post">
<div className="card">
                <div className="card-image">
                    <figure className="image is-4by3">
                        {/* <img src="https://via.placeholder.com/300" alt="Placeholder image" /> */}
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-left">
                            <figure className="image is-48x48">
                                {/* <img src="https://via.placeholder.com/96" alt="Placeholder image" /> */}
                            </figure>
                        </div>
                        <div className="media-content">
                        <h2>{post.user}</h2>
                        </div>
                    </div>
    
                    <div className="content">
                    <p>{post._id}</p>
                    <br />
                        <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                    </div>
                </div>
            </div>

        {/* <DonationForm receiverId={post.user.} /> */}
</div>
                ))
            ) : (
                <p>No posts available</p>
            )}
            </li>
            </ul>
        </div>
    );
};

export default PostList;
