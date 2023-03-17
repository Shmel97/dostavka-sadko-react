import React from 'react';
import { BiBasket } from 'react-icons/bi';
import styles from './Cart.module.scss';

function Cart({ imageUrl, title, description, weight, price, category, categoriesActive }) {
  if (category === categoriesActive) {
    return (
      <div className={styles.cart}>
        <div className={styles.cartImage}>
          <img src={imageUrl} alt="food" />
        </div>
        <div className={styles.cartText}>
          <div className={styles.name}>
            <h1>{title}</h1>
            <p>{weight}</p>
          </div>
          <p>{description}</p>
        </div>
        <div className={styles.price}>
          <h2>{price} ₽</h2>
          <button>
            В корзину
            <BiBasket className={styles.basket} />
          </button>
        </div>
      </div>
    );
  }
}

export default Cart;
