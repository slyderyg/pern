import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from './store/UserStore';
import CategoryStore from './store/CategoryStore';

interface State {
  userStore: UserStore;
  categoryStore: CategoryStore;
}

const userStore = new UserStore();
const categoryStore = new CategoryStore();

export const Context = createContext<State>({userStore, categoryStore})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Context.Provider value={{userStore, categoryStore}}>
      <App />
    </Context.Provider>
);

