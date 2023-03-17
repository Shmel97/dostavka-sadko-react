import React from 'react';
import styles from './Header.module.scss';
import { FaPhoneAlt } from 'react-icons/fa';

import logo from '../../image/logo.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Header() {
  const [isAuth, setIsAuth] = React.useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (window.localStorage.getItem('token')) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, [pathname]);

  const handleClickAuth = () => {
    if (isAuth && window.confirm('Вы действительно хотите выйти?')) {
      window.localStorage.removeItem('token');
      navigate('/');
      setIsAuth(false);
    } else {
      navigate('/login');
    }
  };

  return (
    <div className={styles.header}>
      <Link to="/">
        <img className={styles.logo} src={logo} alt="logo" />
      </Link>
      {/* <div>
        <input type="text" placeholder="Поиск по товарам" />
        <img className={styles.search} src={search} alt="search" />
      </div>*/}
      <div className={styles.calling}>
        <div className={styles.ellipse}>
          <FaPhoneAlt className={styles.icon} />
        </div>
        <div className={styles.contacts}>
          <p>Контакты:</p>
          <a href="+7 (904) 095-19-99">+7 (904) 095-19-99</a>
        </div>
      </div>
      <button className={styles.login} onClick={() => handleClickAuth()}>
        {isAuth ? 'Выйти' : 'Войти'}
      </button>
      <button>
        Корзина
        <div className={styles.line}></div>4
      </button>
    </div>
  );
}

export default Header;
