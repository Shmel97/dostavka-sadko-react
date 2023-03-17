import React from 'react';
import Header from './components/header/Header';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Stocks from './components/stocks/Stocks';
import Main from './components/main/Main';
import Login from './components/login/Login';
import Profile from './components/profile/Profile';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="stocks" element={<Stocks />} />
        <Route path="login" element={<Login />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
