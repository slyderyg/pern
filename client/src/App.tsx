import React, { FC, useContext, useEffect} from 'react';
import {Context} from '.';
import {observer} from 'mobx-react-lite';
import {BrowserRouter} from 'react-router-dom';
import AppRouter from './components/AppRouter';
import {ChakraProvider} from '@chakra-ui/react'
import Navigation from './components/Navigation';

const App: FC = () => {
  const {userStore} = useContext(Context);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      userStore.checkAuth()
    }
  }, []);

  return (
    <ChakraProvider>
      <BrowserRouter>
        <Navigation />
        <AppRouter />
      </BrowserRouter>
    </ChakraProvider>
  ) 
  

}

export default observer(App);
