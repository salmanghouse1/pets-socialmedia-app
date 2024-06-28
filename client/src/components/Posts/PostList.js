import React, { useEffect, useState } from 'react';

import Post from './Post';

const PostList = () => {
    const [posts, setPosts] = useState([]);
    

    useEffect(() => {
        const fetchPosts = async () => {
          
            try {
                const response = await fetch('/api/v1/posts/');
        
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
        
                const data = await response.json();
                setPosts(data);
            } catch (err) {
                console.error('There was an error making the request:', err);
            }
        };
            // Example usage:
            fetchPosts();

        
    }, []);

    return (
        <div className="post-list">
            {posts&&posts.map(post => (
                <Post key={post._id} post={post} />
            ))}
        </div>
    );
};

export default PostList;
