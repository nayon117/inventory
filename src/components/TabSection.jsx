import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

const TabSection = () => {
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
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
      </div>
      <div>
        <p>+Sale Order</p>
      </div>
      </div>
    </section>
  );
};
export default TabSection;
