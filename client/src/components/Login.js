
// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {useLogin} from './../hooks/useLogin';

const Login = () => {
   const [email,setEmail]=useState('');
   const [username,setUsername]=useState('');

    const [password,setPassword]=useState('');
    const {login, error, isLoading} = useLogin()

    

    
    
    const onHandleSubmit = async e => {
        e.preventDefault();
   
        
      await login(email, password)



    }   


      

    return (
        <section className="section">
      <div className="container">
        <h1 className="title">Login</h1>
        <form onSubmit={onHandleSubmit}>
        <div className="field">
            <label className="label">Username</label>
            <div className="control">
            <input 
        type="email" 
        onChange={(e) => setEmail(e.target.value)} 
        value={email} 
      />
            </div>
          </div>
          
          <div className="field">
            <label className="label">Password</label>
            <div className="control">
            <input 
        type="password" 
        onChange={(e) => setPassword(e.target.value)} 
        value={password} 
      />
            </div>
          </div>
          <div className="control">
          <button disabled={isLoading}>Log in</button>
          {error && <div className="error">{error}</div>}
          </div>
        </form>
      </div>
    </section>
    );
};

export default Login;
