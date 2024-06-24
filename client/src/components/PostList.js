import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Post from './Post';

const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get('/api/v1/posts');
            setPosts(res.data.data.posts);
        };

        fetchPosts();
    }, []);

    return (
        <div className="post-list">
            {posts.map(post => (
                <Post key={post._id} post={post} />
            ))}
        </div>
    );
};

export default PostList;
