// src/App.js
import React,{useState} from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import NoPage from './components/NoPage';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';


const App = () => {

  const [auth, setAuth] = useState(localStorage.getItem('token') || null);

  const handleAuth = (token) => {
      localStorage.setItem('token', token);
      setAuth(token);
  };


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    );
};

export default App;
