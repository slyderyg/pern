import React, { useContext, useEffect, useState } from 'react';
import { Context } from '..';
import { observer } from 'mobx-react-lite';
import { Box, Button, Container, Heading, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spacer, useDisclosure } from '@chakra-ui/react';



const AddCategory = () => {
  const {categoryStore} = useContext(Context);
  const [newCategory, setNewCategory] = useState<string>('');
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  useEffect(() => {
    categoryStore.fetchCategory()
  }, []);

  
  return (
    <Container maxW='1300px' mt='30px' padding='0'>

              <Button onClick={onOpen} colorScheme='yellow'>+ Добавить</Button>

                <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Добавление категории</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      <Box borderRadius='lg' borderWidth='1px' maxW='500px'>
                        <Input
                          type='text'
                          placeholder='Название категории'
                          value={newCategory}
                          onChange={(e) => setNewCategory(e.target.value)}
                        />
                      </Box>
                    </ModalBody>

                    <ModalFooter>
                    <Button colorScheme='yellow' onClick={() => {categoryStore.addCategory(newCategory); setNewCategory(''); onClose()}}>+ Добавить</Button>
                    </ModalFooter>
                </ModalContent>
                </Modal>

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