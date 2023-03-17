import React from 'react';
import styles from './Main.module.scss';
import main_banner from '../../image/main_banner.jpg';
import bottom_banner from '../../image/bottom_banner.png';
import Categories from './components/categories/Categories';

function Main() {
  return (
    <div className={styles.main}>
      <img src={main_banner} alt="main_banner" />
      <Categories />
      <div className={styles.line}></div>
    </div>
  );
}

export default Main;
