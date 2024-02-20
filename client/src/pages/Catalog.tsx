import React, { useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import { Button, Container, Divider, Flex } from '@chakra-ui/react';
import ProductCard from '../components/ProductCard';

const Catalog = () => {
  const {productStore, categoryStore} = useContext(Context);

  useEffect(() => {
      categoryStore.fetchCategory();
      productStore.fetchProduct();
    }, []);

  return (
    <Container maxW='1300px' mt='40px' >
      <Flex w='100%' h='500px'>
        <Flex direction='column' w='600px' align='flex-start'>
          {categoryStore.categories.map(el => 
            <Button 
              key={el.id}
              color='#5a6f5d' 
              variant='link' 
              size='lg'
              mb='10px' 
            >{el.name}</Button>
          )}
        </Flex>
        <Flex flexWrap='wrap'>
          {productStore.products.map(el => 
            <ProductCard 
              key={el.id} 
              id={el.id} 
              model={el.model} 
              brand={el.brand}
              price={el.price}
              description={el.description}
              img={el.img}
              CategoryId={el.CategoryId}
            />)
          }
        </Flex>
      </Flex>
    </Container>
  )
}

export default observer(Catalog);