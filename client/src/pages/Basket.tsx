import React, { useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '..';

const Basket = () => {
  const { basketStore } = useContext(Context);
  //добавить загрузку товаров по id из productStore

  
  return (
    <div>
      {basketStore.basket.map(el => <p key={el.productId}>{el.productId}</p>)}
    </div>
  )
}

export default observer(Basket);