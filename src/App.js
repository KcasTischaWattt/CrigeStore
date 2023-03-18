import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import IndexPage from "./pages/IndexPage";
import CatalogPage from "./pages/CatalogPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { AuthProvider, AuthContext } from './network/AuthContext';
import React, { useContext } from 'react';

function AppContent() {
  const { authLoaded, isLoggedIn } = useContext(AuthContext);
  console.log(isLoggedIn)
  if (!authLoaded) {
    return <div>Loading...</div>;
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<IndexPage />} />
        <Route path="/products" element={isLoggedIn ? <CatalogPage /> : <LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
