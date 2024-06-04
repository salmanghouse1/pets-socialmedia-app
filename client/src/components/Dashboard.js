// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
    const body = { text, image };

    try {
      const res = await axios.post('/api/posts', body, config);
      setPosts([res.data, ...posts]);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Dashboard</h1>
        <form onSubmit={onSubmit}>
          <div className="field">
            <label className="label">Text</label>
            <div className="control">
              <input className="input" type="text" name="text" value={text} onChange={onChange} required />
            </div>
          </div>
          <div className="field">
            <label className="label">Image URL</label>
            <div className="control">
              <input className="input" type="text" name="image" value={image} onChange={onChange} />
            </div>
          </div>
          <div className="control">
            <button className="button is-primary" type="submit">Post</button>
          </div>
        </form>
        <div className="posts">
          {posts.map(post => (
            <div key={post._id} className="box">
              <p>{post.text}</p>
              {post.image && <img src={post.image} alt="Post" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
