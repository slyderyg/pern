import React, { useContext, useEffect, useState } from 'react';
import { Stack, Button, TableContainer, Table, Tbody, Td, Th, Thead, Tr, Center } from '@chakra-ui/react';
import { FaPencil, FaRegCircleXmark } from "react-icons/fa6";
import { Context } from '..';
import { observer } from 'mobx-react-lite';

const EditProduct = () => {
    const {adminStore, categoryStore} = useContext(Context);

    useEffect(() => {
        if (adminStore.products.length < 1) {
            adminStore.fetchProduct(1, 9);
        }
      }, []);
    
    const handlePagination = (page: number) => {
        adminStore.setCurrentPage(page);
        adminStore.fetchProduct(page, 9);
    };

  return (
    <>
        <TableContainer>
        <Table variant='striped' colorScheme='yellow'>
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Категория</Th>
              <Th>Брэнд</Th>
              <Th>Модель</Th>
              <Th isNumeric>Цена</Th>
              <Th>Действия</Th>
            </Tr>
          </Thead>
          <Tbody>
            {adminStore.products.map(el => 
                <Tr key={el.id}>
                <Td>{el.id}</Td>
                <Td>{categoryStore.categories.filter(category => category.id === el.CategoryId)[0].name}</Td>
                <Td>{el.brand}</Td>
                <Td>{el.model}</Td>
                <Td isNumeric>{el.price}</Td>
                <Td>
                    <Stack spacing={1} direction='row' align='center'>
                    <Button 
                        leftIcon={<FaRegCircleXmark />} 
                        color='#5a6f5d' 
                        variant='link' 
                        size='lg' 
                        onClick={() => adminStore.deleteProduct(el.id)}
                    ></Button>
                    <Button 
                        leftIcon={<FaPencil />} 
                        color='#5a6f5d' 
                        variant='link' 
                        size='lg' 
                        onClick={() => console.log('Редактировать товар')}
                    ></Button>
                    </Stack>
                </Td>
                </Tr>
            )}
          </Tbody>
        </Table>
      </TableContainer>
      <Center mt='20px'>
        <Stack spacing={4} direction='row' align='center'>
            {adminStore.pages.map(el => 
                <Button key={el} colorScheme='yellow' size='xs' onClick={() => handlePagination(el)}>
                    {el}
                </Button>          
            )}
        </Stack>
      </Center>
        </>
  )
}

export default observer(EditProduct);