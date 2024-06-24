import React, { useState } from 'react';
import axios from 'axios';
import AccountId from './Stripe';



const Register = () => {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [paypalEmail,setPaypalEmail]=useState('')

  const onSubmit = async e => {
    e.preventDefault();
setEmail(email);
setPassword(password);
setPaypalEmail(paypalEmail);
try {
  const res = await axios.post('users/register', { email,username, password, paypalEmail });
  setAuth(res.data.token);
} catch (err) {
  console.error(err);
}
  };

  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Register</h1>
        <form onSubmit={e => onSubmit(e)}>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input className="input" type="email" name="email" value={email} onChange={e => onChange(e.target.value)} />
            </div>
          </div>
          <div className="field">
            <label className="label">Username</label>
            <div className="control">
              <input className="input" type="email" name="username" value={username} onChange={e => onChange(e.target.value)} />
            </div>
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input className="input" type="password" name="password" value={password} onChange={e => onChange(e.target.value)} />
            </div>
          </div>
          
          <div className="field">
            <label className="label">Paypal Email(to reveive Donations)</label>
            <div className="control">
          <input type="email" placeholder="PayPal Email" value={paypalEmail} onChange={e => oChange(e.target.value)} />
            </div>
          </div>
          <div className="control">
            <button className="button is-primary" type="submit">Register</button>
          </div>
        </form>
        {/* <AccountId></AccountId> */}
      </div>
      {error && <div>Error:{error}</div>}
    </section>
  );
};

export default Register;
