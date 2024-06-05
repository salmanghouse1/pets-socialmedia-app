import React, { useState } from 'react';
import axios from 'axios';




const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const { username, email, password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/users/register', formData);
      console.log(res.data);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Register</h1>
        <form onSubmit={e => onSubmit(e)}>
          <div className="field">
            <label className="label">Username</label>
            <div className="control">
              <input className="input" type="text" name="username" value={username} onChange={e => onChange(e.target.value)} />
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input className="input" type="email" name="email" value={email} onChange={e => onChange(e.target.value)} />
            </div>
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input className="input" type="password" name="password" value={password} onChange={e => onChange(e.target.value)} />
            </div>
          </div>
          <div className="control">
            <button className="button is-primary" type="submit">Register</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;
