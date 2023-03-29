import styles from './Basket.module.scss';
import BasketItem from './basketItem/BasketItem';
import { useSelector } from 'react-redux';
import BasketEmpty from './basketEmpty/BasketEmpty';
import { basketItems } from '../../redux/basket/selectors';

const Basket: React.FC = () => {
  const { totalPrice, items } = useSelector(basketItems);
  if (!totalPrice) {
    return <BasketEmpty />;
  }
  return (
    <div className={styles.basket}>
      <div className={styles.text}>
        <div className={styles.line}></div>
        <h1>КОРЗИНА</h1>
      </div>
      {items.map((item) => (
        <BasketItem key={item.id} {...item} />
      ))}
      <div className={styles.total}>
        <div className={styles.text}>
          <h3>
            Итого: <p className={styles.itogo}>{totalPrice} ₽</p>
          </h3>
          <h3>
            До бесплатной доставки не хватает: <p>{totalPrice > 800 ? '0₽' : 800 - totalPrice + '₽'}</p>
          </h3>
          <h3>Минимальная сума заказа 800 ₽</h3>
        </div>
        <button>Оформить заказ</button>
      </div>
    </div>
  );
};

export default Basket;
