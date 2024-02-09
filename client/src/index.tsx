import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from './store/UserStore';
import CategoryStore from './store/CategoryStore';
import ProductStore from './store/ProductStore';

interface State {
  userStore: UserStore;
  categoryStore: CategoryStore;
  productStore: ProductStore;
}

const userStore = new UserStore();
const categoryStore = new CategoryStore();
const productStore = new ProductStore();

export const Context = createContext<State>({userStore, categoryStore, productStore})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Context.Provider value={{userStore, categoryStore, productStore}}>
      <App />
    </Context.Provider>
);

