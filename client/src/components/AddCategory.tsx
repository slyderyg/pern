import React, { useContext, useEffect, useState } from 'react';
import { Context } from '..';
import { observer } from 'mobx-react-lite';
import { Box, Button, Container, Heading, Input, InputGroup, InputRightElement, Spacer } from '@chakra-ui/react';



const AddCategory = () => {
  const {categoryStore} = useContext(Context);
  const [newCategory, setNewCategory] = useState<string>('');

  useEffect(() => {
    categoryStore.fetchCategory()
  }, []);

  //{categoryStore.categories.map(el => <p key={el.name}>{el.name}</p>)}

  
  
  return (
    <Container maxW='1300px' mt='30px' padding='0'>
      <InputGroup size='md' mb='20px'>
        <Input
          pr='4.5rem'
          type='text'
          placeholder='Название категории'
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
        />
        <InputRightElement width='6rem'>
          <Button size='xs' mx='10px' colorScheme='yellow' variant='solid' onClick={() => {categoryStore.addCategory(newCategory); setNewCategory('');}}>
            + Добавить
          </Button>
        </InputRightElement>
      </InputGroup>

      {categoryStore.categories.map(el => 
        <Box key={el.name} borderRadius='lg' borderWidth='1px' minH='40px' display='flex' alignItems='center' mt='10px'>
          <Heading size='xs' color='#5a6f5d' ml='30px'>{el.name}</Heading>
          <Spacer/>
          <Button colorScheme='red' variant='solid' size='xs' mx='10px' onClick={() => {categoryStore.deleteCategory(el.name)}}>Удалить</Button>
        </Box>
      )}
    </Container>
  )
}

export default observer(AddCategory);