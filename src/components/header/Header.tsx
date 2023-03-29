import React from 'react';
import styles from './Header.module.scss';
import { FaPhoneAlt } from 'react-icons/fa';
import logo from '../../image/logo.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { basketItems } from '../../redux/basket/selectors';

function Header() {
  const { items, totalPrice } = useSelector(basketItems);
  const [isAuth, setIsAuth] = React.useState<boolean>(false);
  const menuRef = React.useRef<HTMLDivElement>(null);
  const [menuHamburger, setMenuHamburger] = React.useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isMounted = React.useRef(false);

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
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !event.composedPath().includes(menuRef.current)) {
        setMenuHamburger(false);
      }
    };
    document.body.addEventListener('click', handleClickOutside);
    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, []);

  React.useEffect(() => {
    //Добавил сюда useRef, чтобы при перезагрузке он не стирал массив
    if (isMounted.current) {
      const json = JSON.stringify(items);
      localStorage.setItem('basket', json);
    }
    isMounted.current = true;
  }, [items]);

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
          <p className={styles.basket}>Корзина</p>
          <div className={styles.line}></div>
          <p className={styles.total}>{totalPrice}</p>
          <p className={styles.rubles}>₽</p>
        </button>
      </Link>
    </div>
  );
}

export default Header;
