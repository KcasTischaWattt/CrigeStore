import "../cssStyles/Register.css";
import lgn from "../pictures/lgn.png"
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AuthContext } from '../network/AuthContext';
import { useContext } from 'react';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { handleLogin, setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const url = 'https://api.airtable.com/v0/app1s6GJrvoxihIcc/Users';
    const token = 'patQ53WuDK30GnFAY.8210cfac6b77b7a719a93687ceacb0a63db549f7e7cbde231dee5f4ebe004994';

    const params = {
      filterByFormula: `AND({Email} = '${email}', {Password} = '${password}')`
    };
    const queryParams = new URLSearchParams(params).toString();
    const apiUrl = `${url}?${queryParams}`;

    const response = await fetch(apiUrl, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    const data = await response.json();

    if (data.records && data.records.length > 0) {
        handleLogin();
      navigate('/products');
      console.log('User logged in successfully:', data.records[0]);
    } else {
      console.error('Invalid email or password');
      alert('Invalid email or password');
    }

    // Clear the form
    setEmail('');
    setPassword('');
  }

  return (
    <>
    <img src={lgn} alt="404 Not Found" className="cumpot"/>
    <div className="title-container">
    <h2 className="form-title">Login</h2>
    </div>
    <div className="form-container">
        <div className="form-wrapper">
            <form onSubmit={handleSubmit}>
      <div className="form-group">
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      </div>
      <div className="form-group">
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      </div>
      <div className="form-group">
      <button type="submit" className="form-submit">Login</button>
      </div>
    </form>
    </div>
    </div>
    <div className="RegCont">
    <h4 className="Regtxt">Don’t have an account? </h4>
    <Link to="/register" className="buttonReg">Register</Link>
    </div>
    </>
  );
}

export default LoginPage;
