import React, { useContext } from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes';
import { Context } from '..';
import {observer} from "mobx-react-lite";

const AppRouter = () => {
  const {userStore} =useContext(Context);
  return (
    <Routes>
        {userStore.isAuth ?
          authRoutes.map(({path, Component}) => <Route key={path} path={path} Component={Component}/>)
          :
          publicRoutes.map(({path, Component}) => <Route key={path} path={path} Component={Component}/>)
        }
        <Route path='*' element={<Navigate to="/" replace={true} />} />
    </Routes>
  )
}

export default observer(AppRouter);