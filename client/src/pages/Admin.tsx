import React from 'react';
import { observer } from 'mobx-react-lite';
import { Container, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import AddCategory from '../components/AddCategory';

const Admin = () => {
  return (
<Container maxW='1300px' mt='30px'>
    <Tabs variant='enclosed'>
    <TabList>
        <Tab>Категории</Tab>
        <Tab>Товары</Tab>
        <Tab>Список пользователей</Tab>
        <Tab>Список заказов</Tab>
    </TabList>
    <TabPanels>
        <TabPanel>
        <AddCategory />
        </TabPanel>
        <TabPanel>
        <p>two!</p>
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