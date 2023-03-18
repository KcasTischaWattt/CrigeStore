import React, { useState, useEffect, createContext } from 'react';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authLoaded, setAuthLoaded] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
    setAuthLoaded(true);
  }, []);

  const handleLogin = () => {
    localStorage.setItem('token', 'logged-in');
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, authLoaded, handleLogin, handleLogout, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};
