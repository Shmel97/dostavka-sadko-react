import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCategoryActive, setFilters } from '../../../../redux/slices/categorySlice';
import { useNavigate } from 'react-router-dom';
import styles from './Categories.module.scss';
import ListCart from './listCart/ListCart';

import qs from 'qs';
import { fetchProducts } from '../../../../redux/slices/productSlice';
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
  const navigate = useNavigate();
  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false); // - Начального первого рендера не было еще (false)

  const categoriesActive = useSelector((state) => state.category.categoryActive);
  const { items, status } = useSelector((state) => state.product);

  const dispatch = useDispatch();
  const fetchItems = async () => {
    dispatch(fetchProducts({ categoriesActive }));
  };

  React.useEffect(() => {
    //Если первого рендера не было, тогда не надо вшивать параметры в адресную строчку.
    //А если был ранее рендер, то только тогда нужно эти параметры вшивать в адресную строчку, если то что в скобках [] поменялось
    if (isMounted.current) {
      const queryString = qs.stringify({
        categoriesActive,
      });

      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [categoriesActive]);

  //Здесь я беру данные из строки url и превращаю в обьект с помощью библиотеки qs, далее этот обьект с данными передаю в redax. Всё это при первом рендере!
  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      console.log(params);
      dispatch(
        setFilters({
          ...params,
        }),
      );
      isSearch.current = true;
    }
  }, []);

  React.useEffect(() => {
    fetchItems();

    isSearch.current = false;
  }, [categoriesActive]);

  const onChangeCategory = (i) => {
    dispatch(setCategoryActive(i));
  };

  return (
    <>
      <div className={styles.categories}>
        <ul>
          {categoriesName.map((name, i) => (
            <li
              key={i}
              className={categoriesActive === i ? styles.active : ''}
              onClick={() => onChangeCategory(i)}>
              {name}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.line}></div>
      <ListCart items={items} status={status} categoriesActive={categoriesActive} />
    </>
  );
}

export default Categories;
