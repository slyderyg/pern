import React, { useContext, useEffect, useLayoutEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import { Box, Button, Container, Flex } from '@chakra-ui/react';
import ProductCard from '../components/ProductCard';
import { useInView } from 'react-intersection-observer';

const Catalog = () => {
  const {productStore, categoryStore} = useContext(Context);
  const {ref, inView} = useInView({
    threshold: 0.1
  });
  const [page, setPage] = useState(1);


  useEffect(() => {
    categoryStore.fetchCategory();
    if (productStore.products.length < 1) {
      productStore.lazyLoadProducts(page);
      setPage(page + 1);
    }
  }, []);

  useEffect(() => {
    if (inView && productStore.productsCount > productStore.products.length) {
      productStore.lazyLoadProducts(page);
      setPage(page + 1);
    }
  }, [inView]);

  return (
    <Container maxW='1300px' mt='40px' >
      <Flex w='100%'>
        <Flex direction='column' minW='300px' align='flex-start'>
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
        <Flex flexWrap='wrap' minH='1080px'>
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
      <Box ref={ref} w='100%' h='50px'></Box>
    </Container>
  )
}

export default observer(Catalog);