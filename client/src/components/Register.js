import React, { useState,onChange,setAuth,error } from 'react';





const Register = () => {
  const [email,setEmail]=useState('');
  const [username,setUsername]=useState('');
  const [password,setPassword]=useState('');
  const [paypalEmail,setPaypalEmail]=useState('');

  const onSubmit = async e => {
    e.preventDefault();
setEmail(email);
setPassword(password);
setPaypalEmail(paypalEmail);
e.preventDefault();
        
try {
    const response = await fetch('users/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, username, password, paypalEmail })
    });

    if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
    }

    const data = await response.json();
    setAuth(data.token);
} catch (err) {
    error('There was an error making the request: ' + err.message);
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
              <input className="input" type="username" name="username" value={username} onChange={e => onChange(e.target.value)} />
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
          
          <div className="field">
            <label className="label">Paypal Email(to reveive Donations)</label>
            <div className="control">
          <input type="email" placeholder="PayPal Email" value={paypalEmail} onChange={e => onChange(e.target.value)} />
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
