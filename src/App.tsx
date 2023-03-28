import React from 'react';
import Header from './components/header/Header';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';
//import Login from './components/login/Login';
//import Profile from './components/profile/Profile';
import NotFound from './components/notFound/NotFound';
//import Basket from './components/basket/Basket';

const Basket = React.lazy(() => import(/* webpackChunkName: "Basket" */ './components/basket/Basket'));
const Profile = React.lazy(() => import(/* webpackChunkName: "Profile" */ './components/profile/Profile'));
const Login = React.lazy(() => import(/* webpackChunkName: "Login" */ './components/login/Login'));

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="login" element={<Login />} />
        <Route path="profile" element={<Profile />} />
        <Route
          path="basket"
          element={
            <React.Suspense fallback={<div>Идёт загрузка корзины...</div>}>
              <Basket />
            </React.Suspense>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
