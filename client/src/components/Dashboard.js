// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

const Dashboard = () => {
    const [posts, setPosts] = useState([]);
    const [formData, setFormData] = useState({
        text: '',
        image: ''
    });

    const { text, image } = formData;

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get('/api/posts');
            setPosts(res.data);
        };
        fetchPosts();
    }, []);

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        const decoded = jwtDecode(token);
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        const body = { text, image, user: decoded.user.id };

        try {
            const res = await axios.post('/api/posts', body, config);
            setPosts([res.data, ...posts]);
        } catch (err) {
            console.error(err.response.data);
        }
    };

    return (
        <div>
            <form onSubmit={e => onSubmit(e)}>
                <div>
                    <label>Text</label>
                    <input type="text" name="text" value={text} onChange={e => onChange(e)} />
                </div>
                <div>
                    <label>Image URL</label>
                    <input type="text" name="image" value={image} onChange={e => onChange(e)} />
                </div>
                <button type="submit">Post</button>
            </form>
            <div>
                {posts.map(post => (
                    <div key={post._id}>
                        <h3>{post.text}</h3>
                        {post.image && <img src={post.image} alt="Post" />}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
