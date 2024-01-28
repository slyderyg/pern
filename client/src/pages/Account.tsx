import React, {useContext, useState} from 'react'
import { Context } from '..';
import { observer } from 'mobx-react-lite';
import { Button } from '@chakra-ui/react';

const Account = () => {
  const {userStore} = useContext(Context);

  return (
  
   <>
   {userStore.isAuth &&         
    <Button colorScheme='yellow' variant='solid' mt='30px' onClick={() => userStore.logout()}>
        Выйти
      </Button>
    }
   </>

  )
}

export default observer(Account)