import React from 'react';
import { BiBasket } from 'react-icons/bi';
import styles from './Cart.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addItems } from '../../../../../../redux/slices/basketSlice';

function Cart({ imageUrl, title, description, weight, price, category, categoriesActive, id }) {
  const cartItem = useSelector((state) => state.basket.items.find((obj) => obj.id === id));
  const dispatch = useDispatch();
  const addedCount = cartItem ? cartItem.count : 0;
  const onClickAdd = () => {
    const item = {
      id,
      imageUrl,
      title,
      description,
      price,
    };
    dispatch(addItems(item));
  };

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
          <button onClick={onClickAdd}>
            В корзину
            {addedCount > 0 ? <p>{addedCount}</p> : <BiBasket className={styles.basket} />}
          </button>
        </div>
      </div>
    );
  }
}

export default Cart;
