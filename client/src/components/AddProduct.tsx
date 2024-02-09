import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { Context } from '..';
import { observer } from 'mobx-react-lite';
import { Box, Button, Container, Input, InputGroup, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Stack, Textarea } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';

const AddProduct = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { categoryStore, productStore } = useContext(Context);
    const [brand, setBrand] = useState<string>('');
    const [model, setModel] = useState<string>('');
    const [price, setPrice] = useState<string>('');
    const [category, setCategory] = useState<string>('');
    const [files, setFiles] = useState<FileList>({} as FileList);
    const [description, setDescription] = useState<string>('');

    

    const handleFiles = (e: ChangeEvent<HTMLInputElement>) => {
      e.target.files && setFiles(e.target.files);
    };

    const handleClick = () => {
      const formData = new FormData();
      formData.append('CategoryId', category);
      formData.append('model', model);
      formData.append('brand', brand);
      formData.append('price', price);
      for (const prop in files) {
        if (files.hasOwnProperty(prop)) {
          formData.append('img', files[prop])
        };
      };
      formData.append('description', description);
      productStore.addProduct(formData);
    };


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
                            <Input placeholder='Брэнд' value={brand} onChange={(e) => {setBrand(e.target.value)}}/>
                            <Input placeholder='Модель' value={model} onChange={(e) => {setModel(e.target.value)}}/>
                            <Input placeholder='Цена' type='number' value={price} onChange={(e) => {setPrice(e.target.value)}}/>
                            <Select placeholder='Категория' size='md' value={category} onChange={(e) => {setCategory(e.target.value)}}>
                              {categoryStore.categories.map(el => <option key={el.id} value={el.id}>{el.name}</option>)}
                            </Select>
                            <Input type='file' p='4px' multiple onChange={handleFiles}/>
                            <Textarea placeholder='Описание товара' value={description} onChange={(e) => {setDescription(e.target.value)}}/>
                        </Stack>
                    </Box>
                    </ModalBody>

                    <ModalFooter>
                    <Button colorScheme='yellow' onClick={handleClick}>+ Добавить</Button>
                    </ModalFooter>
                </ModalContent>
                </Modal>
    </Container>
  )
}

export default observer(AddProduct);