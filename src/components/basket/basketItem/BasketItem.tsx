import React from 'react';
import styles from './BasketItem.module.scss';
import { AiFillPlusCircle, AiFillMinusCircle, AiFillCloseCircle } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { addItems, minusItem, removeItem } from '../../../redux/basket/slice';
import { BasketItem } from '../../../redux/basket/types';

type BasketItemProps = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  count: number;
};

const BasketItemBlock: React.FC<BasketItemProps> = ({
  id,
  title,
  description,
  imageUrl,
  price,
  count,
}) => {
  const dispatch = useDispatch();

  const onClickPlus = () => {
    dispatch(addItems({ id } as BasketItem));
  };

  const onClickMinus = () => {
    dispatch(minusItem(id));
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
        <div className={styles.maxwidth}>
          <div className={styles.verx}>
            <div className={styles.verx_descr}>
              <h2>{title}</h2>
            </div>
          </div>
          <div className={styles.niz}>
            <div className={styles.niz_quantity}>
              <button disabled={count === 1} onClick={onClickMinus}>
                <AiFillMinusCircle
                  color="#72A479"
                  className={`${styles.plus} ${count === 1 ? styles.disabled : ''}`}
                />
              </button>
              <p>{count}</p>
              <button onClick={onClickPlus}>
                <AiFillPlusCircle className={styles.plus} />
              </button>
            </div>
            <div className={styles.niz_summ}>
              <p>{price * count} ₽</p>
            </div>
            <AiFillCloseCircle onClick={onClickRemove} color="#72A479" className={styles.niz_close} />
          </div>
        </div>
        <div className={styles.quantity}>
          <button disabled={count === 1} onClick={onClickMinus}>
            <AiFillMinusCircle
              color="#72A479"
              className={`${styles.plus} ${count === 1 ? styles.disabled : ''}`}
            />
          </button>
          <p>{count}</p>
          <button onClick={onClickPlus}>
            <AiFillPlusCircle className={styles.plus} />
          </button>
        </div>
        <div className={styles.summ}>
          <p>{price * count} ₽</p>
        </div>
        <AiFillCloseCircle onClick={onClickRemove} color="#72A479" className={styles.close} />
      </div>
    </div>
  );
};

export default BasketItemBlock;
