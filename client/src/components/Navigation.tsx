import React, {useContext} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Context } from '..';
import { observer } from 'mobx-react-lite';
import { Box, Button, ButtonGroup, Container, Divider, Flex, Heading, IconButton, Image, Menu, MenuButton, MenuItem, MenuList, Spacer } from '@chakra-ui/react';
import { FaUserLarge, FaHeart, FaCartShopping, FaPhone, FaLocationDot, FaGear, FaBars } from "react-icons/fa6";
import { ACCOUNT_ROUTE, ADMIN_ROUTE, AUTH_ROUTE, BASKET_ROUTE, FAVORITES_ROUTE, SHOP_ROUTE } from '../utils/consts';


const Navigation = () => {
  const {userStore} = useContext(Context);
  const navigate = useNavigate();

  return (
    <Container maxW='1300px'>
        <Flex minWidth='max-content' mt='20px' alignItems='center' gap='2'>
        <Box >
            <Image src='logo.png' w='200px' onClick={() => navigate(SHOP_ROUTE)} cursor='pointer'/>
        </Box>
        <Spacer />
        <ButtonGroup hideFrom='1000px' gap='1px'>
        {userStore.user.role === 'ADMIN' && <Button 
                  leftIcon={<FaGear />} 
                  color='#5a6f5d' 
                  variant='link' 
                  size='lg' 
                  onClick={() => navigate(ADMIN_ROUTE)}></Button>}

          {userStore.isAuth? 
            (<Button 
                leftIcon={<FaUserLarge />} 
                color='#5a6f5d' 
                variant='link' 
                size='lg' 
                onClick={() => navigate(ACCOUNT_ROUTE)}></Button>) 
            : 
            (<Button 
                leftIcon={<FaUserLarge />} 
                color='#5a6f5d' 
                variant='link' 
                size='lg' 
                onClick={() => navigate(AUTH_ROUTE)}></Button>)
          }

        <Button 
          leftIcon={<FaCartShopping />} 
          color='#5a6f5d' 
          variant='link' 
          size='lg' 
          onClick={() => userStore.isAuth? navigate(BASKET_ROUTE): navigate(AUTH_ROUTE)}></Button>
        </ButtonGroup>
        <Box hideFrom='801px'>
          <Menu>
            <MenuButton as={IconButton} aria-label='Options' icon={<FaBars />} variant='outline' size='lg'/>
            <MenuList color='#5a6f5d'>
              <MenuItem>Каталог</MenuItem>
              <MenuItem>О нас</MenuItem>
              <MenuItem>Контакты</MenuItem>
              <MenuItem>Оплата</MenuItem>
              <MenuItem>Доставка</MenuItem>
            </MenuList>
            </Menu>
        </Box>

        <ButtonGroup gap='35px' hideBelow='1000px'>
          {userStore.user.role === 'ADMIN' && <Button 
                  leftIcon={<FaGear />} 
                  color='#5a6f5d' 
                  variant='link' 
                  size='lg' 
                  onClick={() => navigate(ADMIN_ROUTE)}>Панель администратора</Button>}

          {userStore.isAuth? 
            (<Button 
                leftIcon={<FaUserLarge />} 
                color='#5a6f5d' 
                variant='link' 
                size='lg' 
                onClick={() => navigate(ACCOUNT_ROUTE)}>Аккаунт</Button>) 
            : 
            (<Button 
                leftIcon={<FaUserLarge />} 
                color='#5a6f5d' 
                variant='link' 
                size='lg' 
                onClick={() => navigate(AUTH_ROUTE)}>Войти</Button>)
          }
        <Button 
          leftIcon={<FaHeart />} 
          color='#5a6f5d' 
          variant='link' 
          size='lg' 
          onClick={() => userStore.isAuth? navigate(FAVORITES_ROUTE) : navigate(AUTH_ROUTE)}>Избранное</Button>
        <Button 
          leftIcon={<FaCartShopping />} 
          color='#5a6f5d' 
          variant='link' 
          size='lg' 
          onClick={() => userStore.isAuth? navigate(BASKET_ROUTE): navigate(AUTH_ROUTE)}>Корзина</Button>
        </ButtonGroup>
        </Flex>
        <Divider mt='10px'/>
        <Flex minWidth='max-content' mt='20px' alignItems='center' gap='2'>
          <ButtonGroup gap='35px' hideBelow='800px'>
          <Button leftIcon={<FaBars />}  color='#5a6f5d' variant='link' size='lg'>Каталог</Button>
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