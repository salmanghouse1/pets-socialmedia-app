
// src/components/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData;
    const history = useHistory();

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/auth/login', formData);
            localStorage.setItem('token', res.data.token);
            history.push('/dashboard');
        } catch (err) {
            console.error(err.response.data);
        }
    };

    return (
        <form onSubmit={e => onSubmit(e)}>
            <div>
                <label>Email</label>
                <input type="email" name="email" value={email} onChange={e => onChange(e)} />
            </div>
            <div>
                <label>Password</label>
                <input type="password" name="password" value={password} onChange={e => onChange(e)} />
            </div>
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
