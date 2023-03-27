import React from 'react';
import Header from './components/header/Header';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';

import Main from './components/main/Main';
import Login from './components/login/Login';
import Profile from './components/profile/Profile';
import NotFound from './components/notFound/NotFound';

import Basket from './components/basket/Basket';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />

        <Route path="login" element={<Login />} />
        <Route path="profile" element={<Profile />} />
        <Route path="basket" element={<Basket />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
