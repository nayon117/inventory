import { Tabs, TabList, TabPanels, Tab, TabPanel, Button, useDisclosure } from "@chakra-ui/react";

import ActiveSaleTable from "./ActiveSaleTable";
import ModalSection from "./ModalSection";
import CompleteSaleTable from "./CompleteSaleTable";

const TabSection = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <section className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-16 mt-16">
      <div className="flex flex-col-reverse md:flex-row gap-6  justify-between">
        <div>
          <Tabs variant='unstyled'>
            <TabList>
              <Tab _selected={{ color: 'white', bg: 'green.400' }}>Active Sale Orders</Tab>
              <Tab _selected={{ color: 'white', bg: 'green.400' }}
              className="ml-4"
              >Completed Sale Orders</Tab>
            </TabList>
            <TabPanels className="mt-6">
              <TabPanel>
                <ActiveSaleTable />
              </TabPanel>
              <TabPanel>
                <CompleteSaleTable/>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
        <div>
          <Button 
          colorScheme='green'
  
          onClick={onOpen}>+Sale Order</Button>

          <ModalSection isOpen={isOpen} onClose={onClose} />
            
        </div>
      </div>
    </section>
  );
};
export default TabSection;
