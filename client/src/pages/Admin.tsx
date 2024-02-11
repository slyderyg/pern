import React from 'react';
import { observer } from 'mobx-react-lite';
import { Container, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import AddCategory from '../components/AddCategory';
import AddProduct from '../components/AddProduct';
import EditProduct from '../components/EditProduct';

const Admin = () => {
  return (
<Container maxW='1300px' mt='30px'>
    <Tabs variant='enclosed' color='#5a6f5d'>
    <TabList >
        <Tab>Категории</Tab>
        <Tab>Товары</Tab>
        <Tab>Пользователи</Tab>
        <Tab>Заказы</Tab>
    </TabList>
    <TabPanels>
        <TabPanel>
          <AddCategory />
        </TabPanel>
        <TabPanel>
          <AddProduct />
          <EditProduct />
        </TabPanel>
        <TabPanel>
        <p>two!</p>
        </TabPanel>
        <TabPanel>
        <p>two!</p>
        </TabPanel>
    </TabPanels>
    </Tabs>
</Container>
  )
}

export default observer(Admin);