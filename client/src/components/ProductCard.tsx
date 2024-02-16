import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Stack, Image, Text } from '@chakra-ui/react';
import React, { useContext, useEffect } from 'react';
import { IProduct } from '../models/response/IProduct';
import { observer } from 'mobx-react-lite';

const ProductCard = ({id, model, brand, price, description, img, CategoryId}: IProduct) => {

  return (
    <Card w='300px' mx='auto' mb='20px'>
        <CardBody>
            <Image
            src={`http://localhost:5000/`+ img[0]}
            alt={model}
            borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
            <Heading size='md'>{model}</Heading>
            <Text>{description}</Text>
            <Text color='blue.600' fontSize='2xl'>
                {price}
            </Text>
            </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
            <ButtonGroup spacing='2'>
                <Button variant='solid' colorScheme='yellow'>
                    В корзину
                </Button>
            </ButtonGroup>
        </CardFooter>
        </Card>
  )
}

export default observer(ProductCard);