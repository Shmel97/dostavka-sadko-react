import React from 'react';
import styles from './Categories.module.scss';
import ListCart from './listCart/ListCart';
export const categoriesName = [
  'Роллы и суши',
  'WOK Лапша',
  'Пицца',
  'Бургеры',
  'Салаты',
  'Горячие блюда',
  'Закуски',
  'Напитки',
];
function Categories() {
  const [categoriesActive, setCategoriesActive] = React.useState(0);

  const onChangeCategory = (i) => {
    setCategoriesActive(i);
  };

  return (
    <>
      <div className={styles.categories}>
        {categoriesName.map((name, i) => (
          <li
            key={i}
            className={categoriesActive === i ? styles.active : ''}
            onClick={() => onChangeCategory(i)}>
            {name}
          </li>
        ))}
      </div>
      <div className={styles.line}></div>
      <ListCart categoriesActive={categoriesActive} />
    </>
  );
}

export default Categories;
