import React, { FC, useContext, useState } from 'react'
import { Context } from '..';
import { observer } from 'mobx-react-lite';
import { Button, Container, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react'

const LoginForm: FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordRepeat, setPasswordRepeat] = useState<string>('');
    const [haveAccount, setHaveAccount] = useState<boolean>(true);

    const {userStore} = useContext(Context);

    if (!userStore.isAuth) {
      return (

        <Container maxW='450px'>
          <FormControl mt='100px'>
            <FormLabel>Адрес электронной почты</FormLabel>
            <Input type='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
          </FormControl>
          <FormControl mt='40px'>
            <FormLabel>Пароль</FormLabel>
            <Input type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
          </FormControl>
          {!haveAccount && 
            <FormControl mt='40px'>
              <FormLabel>Повторите пароль</FormLabel>
              <Input type='password' value={passwordRepeat} onChange={(e) => setPasswordRepeat(e.target.value)}/>
            </FormControl>
          }

          {haveAccount? (
            <Stack direction='row' justify='space-between' mt='70px'>
              <Button colorScheme='yellow' variant='solid' onClick={() => userStore.login(email, password)}>
                Войти
              </Button>
              <Button colorScheme='black' variant='link' onClick={() => setHaveAccount(false)}>
                Нет аккаунта?
              </Button>
            </Stack>
          ) : (
            <Stack direction='row' justify='space-between' mt='70px'>
            <Button colorScheme='yellow' variant='solid' onClick={() => userStore.registration(email, password)}>
              Зарегистрироваться
            </Button>
            <Button colorScheme='black' variant='link' onClick={() => setHaveAccount(true)}>
              Есть аккаунт?
            </Button>
          </Stack>
          )}

        </Container>
      )
    } else {
       return (
        <>
          <Button colorScheme='yellow' variant='solid' mt='30px' onClick={() => userStore.logout()}>
            Выйти
          </Button>
        </>
       )
    }
}

export default observer(LoginForm);