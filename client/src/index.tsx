import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from './store/UserStore';
import CategoryStore from './store/CategoryStore';
import ProductStore from './store/ProductStore';
import BasketStore from './store/BasketStore';
import AdminStore from './store/AdminStore';

interface State {
  userStore: UserStore;
  categoryStore: CategoryStore;
  productStore: ProductStore;
  basketStore: BasketStore;
  adminStore: AdminStore;
}

const userStore = new UserStore();
const categoryStore = new CategoryStore();
const productStore = new ProductStore();
const basketStore = new BasketStore();
const adminStore = new AdminStore();

export const Context = createContext<State>({userStore, categoryStore, productStore, basketStore, adminStore})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Context.Provider value={{userStore, categoryStore, productStore, basketStore, adminStore}}>
      <App />
    </Context.Provider>
);

