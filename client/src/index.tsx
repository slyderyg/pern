import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from './store/UserStore';

interface State {
  userStore: UserStore
}

const userStore = new UserStore();

export const Context = createContext<State>({userStore})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Context.Provider value={{userStore}}>
      <App />
    </Context.Provider>
);

