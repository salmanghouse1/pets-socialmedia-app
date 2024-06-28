// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';

const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  const [formData, setFormData] = useState({
    text: '',
    image: ''
  });

  

  const { text, image } = formData;

 

  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Dashboard</h1>
        
        
      </div>
    </section>
  );
};

export default Dashboard;
