import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  IconButton,
} from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
import { useState } from "react";
import useSales from "../hooks/useSales";
import SaleForm from "./SaleForm";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import {  useUser } from "@clerk/clerk-react";

const ActiveSaleTable = () => {
  const { sales } = useSales();
  const [selectedSale, setSelectedSale] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const {user} = useUser()
  

  const openModal = (sale) => {
    setSelectedSale(sale);
    setIsOpen(true);
  };

  const closeModal = () => {
    setSelectedSale(null);
    setIsOpen(false);
  };

  console.log("Sales in table:", sales);

  return (
    <section className="">
      <TableContainer>
        <Table size="sm">
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Customer Name</Th>
              <Th>Price</Th>
              <Th>Last Modified</Th>
              <Th>Edit/View</Th>
            </Tr>
          </Thead>
          <Tbody>
            {sales.map((sale) => (
              <Tr key={sale.customer_id}>
                <Td>{sale?.customer_id}</Td>
                <Td>{user?.fullName}</Td>
                <Td>
                  {sale?.items?.map((item, index) => (
                    <div key={index}>
                      <span>
                      ₹: {item.price}
                      </span>
                      <br />
                    </div>
                  ))}
                </Td>
                <Td>{sale?.invoice_date}</Td>
                <Td>
                  <IconButton
                    icon={<BsThreeDots />}
                    onClick={() => openModal(sale)}
                  />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>

      <Modal isOpen={isOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{selectedSale ? "Edit Sale" : "Add Sale"}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <SaleForm sale={selectedSale} onClose={closeModal} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </section>
  );
};

export default ActiveSaleTable;
