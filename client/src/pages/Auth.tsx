import React from 'react';
import LoginForm from '../components/LoginForm';
import {observer} from 'mobx-react-lite';

const Auth = () => {
  return (
    <div>
     <LoginForm /> 
    </div>
  )
}

export default observer(Auth);