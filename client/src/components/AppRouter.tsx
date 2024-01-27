import React, { useContext } from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes';
import { Context } from '..';


const AppRouter = () => {
  const {userStore} =useContext(Context);
  console.log(userStore.user)
  return (
    <Routes>
        {userStore.isAuth && authRoutes.map(({path, Component}) => 
            <Route key={path} path={path} Component={Component}/>
        )};
        {publicRoutes.map(({path, Component}) => 
            <Route key={path} path={path} Component={Component}/>
        )}
        <Route path='*' element={<Navigate to="/" replace={true} />} />
    </Routes>
  )
}

export default AppRouter