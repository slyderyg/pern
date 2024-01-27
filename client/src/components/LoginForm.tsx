import React, { FC, useContext, useState } from 'react'
import { Context } from '..';
import { observer } from 'mobx-react-lite';

const LoginForm: FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const {userStore} = useContext(Context);

    if (!userStore.isAuth) {
      return (
        <div>
            <input type='text' placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type='password' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={() => userStore.login(email, password)}>Login</button>
            <button onClick={() => userStore.registration(email, password)}>Registration</button>
        </div>
      )
    } else {
       return (
        <div>
          Добро пожаловать {userStore.user.email}
          <button onClick={() => userStore.logout()}>Выйти</button>
        </div>
       )
    }
}

export default observer(LoginForm);