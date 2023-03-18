import React, { useContext, useState } from 'react';
import "../cssStyles/Register.css";
import lgn from "../pictures/lgn.png"
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';  
import { AuthContext } from '../network/AuthContext';


function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { handleLogin, setIsLoggedIn } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    const url = 'https://api.airtable.com/v0/app1s6GJrvoxihIcc/Users';
    const token = 'patQ53WuDK30GnFAY.8210cfac6b77b7a719a93687ceacb0a63db549f7e7cbde231dee5f4ebe004994';

    const data = {
      records: [
        {
          fields: {
            Name: name,
            Email: email,
            Password: password
          }
        }
      ]
    };

    fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      console.log('User registered successfully:', data);
      handleLogin();
      navigate('/products');
    })
    .catch(error => {
      console.error('Error registering user:', error);
    });

    // Clear the form
    setName('');
    setEmail('');
    setPassword('');
  }

  return (
    <>     
    <img src={lgn} alt="logo" className='cumpot' />
    <div className= "title-container">
    <h2 className="form-title">Register</h2>
    </div>
    <div className="form-container">
        <div className="form-wrapper">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      </div>
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
      <button type="submit" className="form-submit">Register</button>
      </div>
    </form>
    </div>
    </div>
    <div className="RegCont">
    <h4 className="Regtxt">Already have an account? </h4>
    <Link to="/login" className="buttonReg">Login</Link>
    </div>
    </>
  );
}

export default RegisterPage;
