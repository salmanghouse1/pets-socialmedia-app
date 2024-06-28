import React from 'react';
import { Link,Outlet } from 'react-router-dom';
import {useLogout} from '../hooks/useLogout';

const Navbar = () => {
  const {logout}=useLogout();


const handleClick = ()=>{
  logout();
};





  return (
<>
    <nav className="navbar is-primary">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          Pet Social Media
        </Link>
      </div>
      <div className="navbar-menu">
        <div className="navbar-end">
          <Link className="navbar-item" to="/register">
            Register
          </Link>
          <Link className="navbar-item" to="/login">
            Login
          </Link>
          <Link className="navbar-item" to="/logout">
            Logout
          </Link>

          <Link className="navbar-item" to="/dashboard">
            Dashboard
          </Link>
        </div>
      </div>
    </nav>
<Outlet/>
</>
);
};

export default Navbar;
