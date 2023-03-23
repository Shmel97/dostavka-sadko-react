import React from 'react';
import styles from './Header.module.scss';
import { FaPhoneAlt } from 'react-icons/fa';
import logo from '../../image/logo.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const { totalPrice } = useSelector((state) => state.basket);
  const [isAuth, setIsAuth] = React.useState(false);
  const menuRef = React.useRef();
  const [menuHamburger, setMenuHamburger] = React.useState(false);
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

  const hamburgerClick = () => {
    setMenuHamburger(!menuHamburger);
  };

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.composedPath().includes(menuRef.current)) {
        setMenuHamburger(false);
      }
    };
    document.body.addEventListener('click', handleClickOutside);
    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.header}>
      <div ref={menuRef} onClick={hamburgerClick} className={styles.hamburger}>
        <span className={`${styles.line} ${menuHamburger === true ? styles.active : ''}`}></span>
        <span className={`${styles.line} ${menuHamburger === true ? styles.active : ''}`}></span>
        <span className={`${styles.line} ${menuHamburger === true ? styles.active : ''}`}></span>
        <h3 className={styles.menu}>МЕНЮ</h3>
        <div className={`${styles.mnutop} ${menuHamburger === true ? styles.active : ''}`}>
          <p onClick={() => handleClickAuth()}>{isAuth ? 'Выйти' : 'Войти'}</p>
          <p>+7(904)095-19-99</p>
        </div>
      </div>
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
          <a href="/">+7 (904) 095-19-99</a>
        </div>
      </div>
      <button className={styles.login} onClick={() => handleClickAuth()}>
        {isAuth ? 'Выйти' : 'Войти'}
      </button>
      <Link className={styles.link} to="/basket">
        <button>
          Корзина
          <div className={styles.line}></div>
          <p>{totalPrice} ₽</p>
        </button>
      </Link>
    </div>
  );
}

export default Header;
