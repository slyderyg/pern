import { Button, Heading, Image, Text, Box } from '@chakra-ui/react';
import React, { useContext, useState } from 'react';
import { IProduct } from '../models/response/IProduct';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import { FaCartShopping, FaHeart } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import { BASKET_ROUTE } from '../utils/consts';

const ProductCard = ({id, model, brand, price, description, img, CategoryId}: IProduct) => {
    const { basketStore } = useContext(Context);
    const [isMouseOver, setMouseOver] = useState(false);
    const navigate = useNavigate();
    
    const handleMouseEnter = () => {
        setMouseOver(true);
    };
    const handleMouseLeave = () => {
        setMouseOver(false)
    };
    const handleAddToCart = (productId: number, quantity: number) => {
      basketStore.addToBasket(productId, quantity);
    };
  return (
    <Box 
    w='250px' 
    mx='auto' 
    mb='40px' 
    onMouseEnter={handleMouseEnter} 
    onMouseLeave={handleMouseLeave}
    position='relative'
    zIndex='1'
    >
            <Image
            src={`http://localhost:5000/`+ img[0]}
            alt={model}
            borderRadius='lg'
            />
            {isMouseOver &&  
              <>
                <Button 
                  position='absolute' 
                  zIndex='2' 
                  display='block' 
                  top='3%' 
                  right='0'
                  color='#5a6f5d'
                  size='lg' 
                  variant='link'
                  leftIcon={<FaHeart />}
                ></Button>
                {basketStore.basket.find(el => el.productId === id) ?
                    (<Button 
                      position='absolute' 
                      zIndex='2' 
                      display='block' 
                      top='40%' 
                      left='25%'
                      colorScheme='yellow'
                      leftIcon={<FaCartShopping />}
                      onClick={() => navigate(BASKET_ROUTE)}
                    >Перейти</Button>) :
                    (<Button 
                      position='absolute' 
                      zIndex='2' 
                      display='block' 
                      top='40%' 
                      left='25%'
                      colorScheme='yellow'
                      leftIcon={<FaCartShopping />}
                      onClick={() => handleAddToCart(id, 1)}
                    >Добавить</Button>)}
                </>}
            <Text color='#5a6f5d' fontSize='md' mt='10px'>
                {model}
            </Text>
            <Heading size='md'>{price} руб.</Heading>
    </Box>
  )
}

export default observer(ProductCard);