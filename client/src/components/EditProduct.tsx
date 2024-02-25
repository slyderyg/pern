import React, { useContext, useEffect } from 'react';
import { Card, Stack, CardBody, Heading, CardFooter, Button, Image, Text } from '@chakra-ui/react';
import { Context } from '..';
import { observer } from 'mobx-react-lite';

const EditProduct = () => {
    const {productStore, categoryStore} = useContext(Context);

    useEffect(() => {
        productStore.fetchProduct(1,9);
        return () => {productStore.cleanStore()}
      }, []);


  return (
    <>
    {productStore.products.map(el =>     
        <Card
        key={el.id}
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        mt='20px'
        >
            <Image
                objectFit='contain'
                maxW={{ base: '100%', sm: '200px' }}
                src={`http://localhost:5000/`+el.img[0]}
                alt={el.model}
                ml='20px'
            />

            <Stack>
                <CardBody>
                <Heading size='md'>{el.model} - {el.brand}</Heading>
                <Text>Категория: {categoryStore.categories.filter(category => category.id === el.CategoryId)[0].name}</Text>
                <Text mt='10px'>Описание: {el.description}</Text>
                <Heading size='sm' mt='10px'>Цена: {el.price} руб.</Heading>
                </CardBody>
                <CardFooter>
                <Button variant='solid' colorScheme='red' onClick={() => productStore.deleteProduct(el.id)}>
                    Удалить
                </Button>
                </CardFooter>
            </Stack>
        </Card>)}
    </>
  )
}

export default observer(EditProduct);