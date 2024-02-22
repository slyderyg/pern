import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from './store/UserStore';
import CategoryStore from './store/CategoryStore';
import ProductStore from './store/ProductStore';
import BasketStore from './store/BasketStore';

interface State {
  userStore: UserStore;
  categoryStore: CategoryStore;
  productStore: ProductStore;
  basketStore: BasketStore;
}

const userStore = new UserStore();
const categoryStore = new CategoryStore();
const productStore = new ProductStore();
const basketStore = new BasketStore();

export const Context = createContext<State>({userStore, categoryStore, productStore, basketStore})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Context.Provider value={{userStore, categoryStore, productStore, basketStore}}>
      <App />
    </Context.Provider>
);

