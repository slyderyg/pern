import React, { FC, useContext, useEffect, useState } from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import { Context } from '.';
import { observer } from 'mobx-react-lite';
import { IUser } from './models/response/IUser';
import UserService from './services/UserService';

const App: FC = () => {
  const {store} = useContext(Context);
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      store.checkAuth()
    }
  }, []);

  async function getUsers() {
    try {
      const response = await UserService.fetchUsers();
      setUsers(response.data);
    } catch (error) {
      console.log(error)
    }
  }

  if (store.isLoading) {
    return (
      <div>Загрузка...</div>
    )
  }

  if (!store.isAuth) {
    return (
      <>
        <LoginForm/>
        <div>
        <button onClick={getUsers}>Получить пользователей</button>
      </div>
        {users.map(user => 
          <div key={user.email}>{user.email}</div>
        )}
      </>


    )
  }
  return (
    <div>
      <h1>Пользователь {store.user.email} авторизован</h1>
      <button onClick={() => store.logout()}>Выйти</button>
      <div>
        <button onClick={getUsers}>Получить пользователей</button>
      </div>
        {users.map(user => 
          <div key={user.email}>{user.email}</div>
        )}
    </div>
  );
}

export default observer(App);
