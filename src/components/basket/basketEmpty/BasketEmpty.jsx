import React from 'react';
import { Link } from 'react-router-dom';
import cartEmptyImg from '../../../image/empty-cart.png';
import styles from './BasketEmpty.module.scss';

const BasketEmpty = () => {
  return (
    <>
      <div className={styles.basket}>
        <h2>
          Корзина пустая <span>😕</span>
        </h2>
        <p>
          Вероятней всего, вы не заказывали ещё еду.
          <br />
          Для того, чтобы заказать еду, перейди на главную страницу.
        </p>
        <img src={cartEmptyImg} alt="Empty basket" />
        <Link to="/" className={styles.button_black}>
          <button>Вернуться назад</button>
        </Link>
      </div>
    </>
  );
};

export default BasketEmpty;
