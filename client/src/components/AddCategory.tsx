import React, { useContext, useEffect } from 'react';
import { Context } from '..';
import { observer } from 'mobx-react-lite';



const AddCategory = () => {
  const {categoryStore} = useContext(Context);

  useEffect(() => {
    categoryStore.fetchCategory()
  }, []);

  //надо отрисовать категории

  
  
  return (
    <>
      {categoryStore.categories.map(el => <p key={el.name}>{el.name}</p>)}
    </>
  )
}

export default observer(AddCategory);