import React, { useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import { Button, ButtonGroup, Card, CardBody, CardFooter, Container, Divider, Flex, Heading, Stack, Image, Text, Box } from '@chakra-ui/react';

const Catalog = () => {
  const {categoryStore} = useContext(Context);

  useEffect(() => {
    categoryStore.fetchCategory()
  }, []);

  return (
    <Container maxW='1300px' mt='40px' >
      <Flex w='100%' h='500px'>
        <Flex direction='column' w='300px' align='flex-start'>
          {categoryStore.categories.map(el => 
            <Button 
                    color='#5a6f5d' 
                    variant='link' 
                    size='lg'
                    mb='10px' 
            >{el.name}</Button>
          )}
        </Flex>
        <Divider orientation='vertical' opacity='0.4' borderColor='black'/>
        <Flex >
        <Box w='300px' h='300px' bg='red'></Box>
        </Flex>
      </Flex>
    </Container>
  )
}

export default observer(Catalog);