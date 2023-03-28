import styles from './Main.module.scss';
import main_banner from '../../image/main_banner.jpg';
import Categories from './components/categories/Categories';

function Main() {
  return (
    <div className={styles.main}>
      <img className={styles.banner} src={main_banner} alt="main_banner" />
      <Categories />
      <div className={styles.line}></div>
    </div>
  );
}

export default Main;
