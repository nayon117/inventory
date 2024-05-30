import { Tabs, TabList, TabPanels, Tab, TabPanel, Button, useDisclosure } from "@chakra-ui/react";

import ActiveSaleTable from "./ActiveSaleTable";
import ModalSection from "./ModalSection";

const TabSection = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <section className="">
      <div className="flex  justify-between">
        <div>
          <Tabs variant="soft-rounded" colorScheme="green">
            <TabList>
              <Tab>Active Sale Orders</Tab>
              <Tab>Completed Sale Orders</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <ActiveSaleTable />
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
        <div>
          <Button onClick={onOpen}>+Sale Order</Button>

          <ModalSection isOpen={isOpen} onClose={onClose} />
            
        </div>
      </div>
    </section>
  );
};
export default TabSection;
