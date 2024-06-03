// src/components/Register.js
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
        <form onSubmit={e => onSubmit(e)}>
            <div>
                <label>Username</label>
                <input type="text" name="username" value={username} onChange={e => onChange(e)} />
            </div>
            <div>
                <label>Email</label>
                <input type="email" name="email" value={email} onChange={e => onChange(e)} />
            </div>
            <div>
                <label>Password</label>
                <input type="password" name="password" value={password} onChange={e => onChange(e)} />
            </div>
            <button type="submit">Register</button>
        </form>
    );
};

export default Register;
