import React, {useContext} from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { Context } from '..';
import { observer } from 'mobx-react-lite';
import { Box, Button, ButtonGroup, Container, Divider, Flex, Heading, Image, Spacer } from '@chakra-ui/react';
import { FaUserLarge, FaHeart, FaCartShopping, FaPhone, FaLocationDot } from "react-icons/fa6";
import { ACCOUNT_ROUTE, AUTH_ROUTE, BASKET_ROUTE } from '../utils/consts';


const Navigation = () => {
  const {userStore} = useContext(Context);
  const navigate = useNavigate();

  return (
    <Container maxW='1300px'>
        <Flex minWidth='max-content' mt='20px' alignItems='center' gap='2'>
        <Box >
            <Image src='logo.png' w='200px'/>
        </Box>
        <Spacer />
        <ButtonGroup gap='35px'>
          {userStore.isAuth? 
            (<Button leftIcon={<FaUserLarge />} color='#5a6f5d' variant='link' size='lg' onClick={() => navigate(ACCOUNT_ROUTE)}>Аккаунт</Button>) 
            : 
            (<Button leftIcon={<FaUserLarge />} color='#5a6f5d' variant='link' size='lg' onClick={() => navigate(AUTH_ROUTE)}>Войти</Button>)
          }
        <Button leftIcon={<FaHeart />} color='#5a6f5d' variant='link' size='lg'>Избранное</Button>
        <Button leftIcon={<FaCartShopping />} color='#5a6f5d' variant='link' size='lg' onClick={() => navigate(BASKET_ROUTE)}>Корзина</Button>
        </ButtonGroup>
        </Flex>
        <Divider mt='10px'/>
        <Flex minWidth='max-content' mt='20px' alignItems='center' gap='2'>
          <ButtonGroup gap='35px'>
          <Button color='#5a6f5d' variant='link' size='lg'>Каталог</Button>
          <Button color='#5a6f5d' variant='link' size='lg'>О нас</Button>
          <Button color='#5a6f5d' variant='link' size='lg'>Контакты</Button>
          <Button color='#5a6f5d' variant='link' size='lg'>Оплата</Button>
          <Button color='#5a6f5d' variant='link' size='lg'>Доставка</Button>
          </ButtonGroup>
          <Spacer />
          <Button leftIcon={<FaLocationDot />} color='#ecc94b' variant='link' size='lg'>Казань</Button>
        </Flex>
        

    </Container>
  )
}

export default observer(Navigation)