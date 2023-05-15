import React from 'react';
import { useSelector } from 'react-redux';
import { setCategoryActive } from '../../../../redux/category/slice';
import styles from './Categories.module.scss';
import ListCart from './listCart/ListCart';

import { products } from '../../../../redux/product/selectors';
import { useAppDispatch } from '../../../../redux/store';
import { categoryActive } from '../../../../redux/category/selectors';
import { categoryItems } from '../../../../redux/category/selectors';

import { fetchProducts } from '../../../../redux/product/asyncActions';
import { fetchCategories } from '../../../../redux/category/asyncActions';
export const baseUrl = 'http://rasuliomusic.ru/'

function Categories() {
 
  const categoriesActive = useSelector(categoryActive);
  const categoriesItems = useSelector(categoryItems);
  const { items, status } = useSelector(products);
  console.log(categoriesActive)
  const dispatch = useAppDispatch();

  const fetchItems = async () => {
    dispatch(fetchProducts(categoriesActive));
  };

  const fetchCategory = async () => {
    dispatch(fetchCategories());
  };

  React.useEffect(() => {
    fetchCategory();
  }, []);

  React.useEffect(() => {
    fetchItems();
  }, [categoriesActive]);

  const onChangeCategory = (slug: string) => {
    dispatch(setCategoryActive(slug));
  };



  return (
    <>
      <div className={styles.categories}>
        <ul>
          {categoriesItems.map((name, i) => (
            <li
              key={name.id}
              className={categoriesActive === name.slug ? styles.active : ''}
              onClick={() => onChangeCategory(name.slug)}>
              {name.title}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.line}></div>
      <ListCart
        items={items}
        status={status}
        categoriesActive={categoriesActive}
        categoriesItems={categoriesItems}
      />
    </>
  );
}

export default Categories;
