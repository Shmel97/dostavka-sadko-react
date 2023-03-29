import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.scss';

const NotFound: React.FC = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>😕</span>
        <br />
        Ничего не найдено
      </h1>
      <p className={styles.description}>
        К сожалению данная страница отсутсвует в нашем интернет-магазине
      </p>
      <Link to="/" className={styles.button_black}>
          <button>На главную</button>
        </Link>
    </div>
  );
};

export default NotFound;
