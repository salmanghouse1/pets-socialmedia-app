
// src/components/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Login = () => {
   const [email,setEmail]=useState('');

    const [password,setPassword]=useState('');


    const history = useNavigate();

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onHandleSubmit = async e => {
        e.preventDefault();
       


      };

    return (
        <section className="section">
      <div className="container">
        <h1 className="title">Login</h1>
        <form onSubmit={onHandleSubmit}>
        <div className="field">
            <label className="label">Username</label>
            <div className="control">
              <input className="input" type="username" name="username" value={username} onChange={onChange} required />
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input className="input" type="email" name="email" value={email} onChange={setEmail(e.target.value)} required />
            </div>
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input className="input" type="password" name="password" value={password} onChange={setPassword(e.target.value)} required />
            </div>
          </div>
          <div className="control">
            <button className="button is-primary" type="submit">Login</button>
          </div>
        </form>
      </div>
    </section>
    );
};

export default Login;
