import React from 'react';
import { categoriesName } from '../Categories';
import Cart from './Cart/Cart';
import styles from './ListCart.module.scss';
import Skeleton from './Skeleton/Skeleton';

/*const products = [
  {
    id: '0',
    imageUrl:
      'https://ru.foodsoul.pro/uploads/branches/6409/images/items/medium/d8fe625ee688ee3a07453514735975cd.jpg',
    title: 'Кесадилья с курицей',
    description:
      'Нежная курица с сладким перцем в мексиканском пикантном соусе, подаётся в тортилье на гриле.',
    weight: '1шт',
    price: 259,
    category: 3,
  },
  {
    id: '1',
    imageUrl:
      'https://ru.foodsoul.pro/uploads/branches/6409/images/items/medium/b72ab6f8f32e519e513d3d25e666d82e.jpg',
    title: 'Чизбургер',
    description:
      'Бургер с сочной говяжьей котлетой под двумя сырами и соусом от шефа. Подаётся с картофелем фри и соусом.',
    weight: '1шт',
    price: 369,
    category: 3,
  },
  {
    id: '2',
    imageUrl:
      'https://ru.foodsoul.pro/uploads/branches/6409/images/items/medium/0888ddc62f63cd172fc077cccfcd6b34.jpg',
    title: 'Грибной биф-бургер',
    description:
      'Бургер с сочной говяжей котлетой под супер сливочным соусом с грибами. Подаётся с картофелем фри и соусом.',
    weight: '1шт',
    price: 389,
    category: 3,
  },
  {
    id: '3',
    imageUrl:
      'https://ru.foodsoul.pro/uploads/branches/6409/images/items/medium/b5b70c34578fb09dda670c8551569bf9.jpg',
    title: 'Биф-бургер с яйцом',
    description:
      'Бургер с сочной говяжьей котлетой, овощами, пикантным соусом и яйцом. Подаётся с картофелем фри и соусом.',
    weight: '1шт',
    price: 369,
    category: 3,
  },
  {
    id: '4',
    imageUrl:
      'https://ru.foodsoul.pro/uploads/branches/6409/images/items/medium/2c988ba703451b38a7a71443ba3ea177.jpg',
    title: 'Чикен-слоу',
    description:
      'Бургер с нежным куриным филе, с салатом «Коул-слоу» и соусом 1000 островов. Подаётся с картофелем фри и соусом.',
    weight: '1шт',
    price: 259,
    category: 3,
  },
  {
    id: '5',
    imageUrl:
      'https://ru.foodsoul.pro/uploads/branches/6409/images/items/medium/6d3c5f0a905fa92ee56c15ce34acb374.jpg',
    title: 'Чикен-ранч',
    description:
      'Бургер с нежным куриным филе, с чесночным соусом «ранч». Подаётся с картофелем фри и соусом.',
    weight: '1шт',
    price: 259,
    category: 3,
  },
  {
    id: '6',
    imageUrl:
      'https://ru.foodsoul.pro/uploads/branches/6409/images/items/medium/acd7696df29baf8fb28a696bc342aa76.jpg',
    title: '4 Сезона',
    description:
      'томатный соус/сливочный соус, нежная ветчина, колбаски, сыр, пепперони, помидоры, шампиньоны, курочка',
    weight: '700гр',
    price: 510,
    category: 2,
  },
  {
    id: '7',
    imageUrl:
      'https://ru.foodsoul.pro/uploads/branches/6409/images/items/medium/acd7696df29baf8fb28a696bc342aa76.jpg',
    title: '4 Сезона',
    description:
      'томатный соус/сливочный соус, нежная ветчина, колбаски, сыр, пепперони, помидоры, шампиньоны, курочка',
    weight: '700гр',
    price: 510,
    category: 2,
  },
  {
    id: '8',
    imageUrl:
      'https://ru.foodsoul.pro/uploads/branches/6409/images/items/medium/acd7696df29baf8fb28a696bc342aa76.jpg',
    title: '4 Сезона',
    description:
      'томатный соус/сливочный соус, нежная ветчина, колбаски, сыр, пепперони, помидоры, шампиньоны, курочка',
    weight: '700гр',
    price: 510,
    category: 2,
  },
  {
    id: '9',
    imageUrl:
      'https://ru.foodsoul.pro/uploads/branches/6409/images/items/medium/acd7696df29baf8fb28a696bc342aa76.jpg',
    title: '4 Сезона',
    description:
      'томатный соус/сливочный соус, нежная ветчина, колбаски, сыр, пепперони, помидоры, шампиньоны, курочка',
    weight: '700гр',
    price: 510,
    category: 2,
  },
  {
    id: '10',
    imageUrl:
      'https://ru.foodsoul.pro/uploads/branches/6409/images/items/medium/acd7696df29baf8fb28a696bc342aa76.jpg',
    title: '4 Сезона',
    description:
      'томатный соус/сливочный соус, нежная ветчина, колбаски, сыр, пепперони, помидоры, шампиньоны, курочка',
    weight: '700гр',
    price: 510,
    category: 2,
  },
  {
    id: '11',
    imageUrl:
      'https://ru.foodsoul.pro/uploads/branches/6409/images/items/medium/acd7696df29baf8fb28a696bc342aa76.jpg',
    title: '4 Сезона',
    description:
      'томатный соус/сливочный соус, нежная ветчина, колбаски, сыр, пепперони, помидоры, шампиньоны, курочка',
    weight: '700гр',
    price: 510,
    category: 2,
  },
];*/

type ListCartProps = {
  categoriesActive: number;
  items: any;
  status: string;
};

const ListCart: React.FC<ListCartProps> = ({ categoriesActive, items, status }) => {
  return (
    <div className={styles.listcart}>
      <div>
        <div className={styles.line}></div>
        <h1>{categoriesName[categoriesActive]}</h1>
      </div>
      {status === 'error' ? (
        <div>
          <h2>
            Произошла ошибка загрузки товаров <span>😕</span>
          </h2>
          <p>
            Пожалуйста, зайдите чуть позже.
            <br />
            Ведутся тех. работы...
          </p>
        </div>
      ) : (
        <ul className={styles.carts}>
          {status === 'loading'
            ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
            : items.map((product: any) => (
                <li key={product.id}>
                  <Cart
                    id={product.id}
                    imageUrl={product.imageUrl}
                    title={product.title}
                    description={product.description}
                    weight={product.weight}
                    price={product.price}
                    category={product.category}
                    categoriesActive={categoriesActive}
                  />
                </li>
              ))}
        </ul>
      )}
    </div>
  );
};

export default ListCart;
