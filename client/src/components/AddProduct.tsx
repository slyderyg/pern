import React, { useContext, useEffect, useState } from 'react';
import { Context } from '..';
import { observer } from 'mobx-react-lite';
import { Box, Button, Container, Input, InputGroup, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Textarea } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';

const AddProduct = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Container maxW='1300px' mt='30px' padding='0'>
              <Button onClick={onOpen} colorScheme='yellow'>+ Добавить</Button>

                <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Добавление товара</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                    <Box borderRadius='lg' borderWidth='1px' maxW='500px'>
                        <Stack m='10px'>
                            <Input placeholder='Брэнд' />
                            <Input placeholder='Модель' />
                            <Input placeholder='Цена' />
                            <Input type='file' p='4px'/>
                            <Textarea placeholder='Описание товара' />
                        </Stack>
                    </Box>
                    </ModalBody>

                    <ModalFooter>
                    <Button colorScheme='yellow'>+ Добавить</Button>
                    </ModalFooter>
                </ModalContent>
                </Modal>
    </Container>
  )
}

export default AddProduct