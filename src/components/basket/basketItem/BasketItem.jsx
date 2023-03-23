import React from 'react';
import styles from './BasketItem.module.scss';
import { AiFillPlusCircle, AiFillMinusCircle, AiFillCloseCircle } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { addItems, minusItem, removeItem } from '../../../redux/slices/basketSlice';
const BasketItem = ({ id, title, description, imageUrl, price, count }) => {
  const dispatch = useDispatch();

  const onClickPlus = () => {
    dispatch(addItems({ id }));
  };

  const onClickMinus = () => {
    dispatch(minusItem({ id }));
  };

  const onClickRemove = () => {
    dispatch(removeItem(id));
  };

  return (
    <div className={styles.cart}>
      <div className={styles.tovar}>
        <div className={styles.cartImage}>
          <img src={imageUrl} alt="food" />
        </div>
        <div className={styles.descr}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className={styles.quantity}>
          <AiFillMinusCircle onClick={onClickMinus} color="#72A479" className={styles.plus} />
          <p>{count}</p>
          <AiFillPlusCircle onClick={onClickPlus} color="#72A479" className={styles.plus} />
        </div>
        <div className={styles.summ}>
          <p>{price * count} ₽</p>
        </div>
        <AiFillCloseCircle onClick={onClickRemove} color="#72A479" className={styles.close} />
      </div>
    </div>
  );
};

export default BasketItem;
