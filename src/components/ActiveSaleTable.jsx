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
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton } from "@chakra-ui/react";

const ActiveSaleTable = () => {
  const { sales } = useSales();
  const [selectedSale, setSelectedSale] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (sale) => {
    setSelectedSale(sale);
    setIsOpen(true);
  };

  const closeModal = () => {
    setSelectedSale(null);
    setIsOpen(false);
  };

  console.log('Sales in table:', sales);

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
            {sales.map((item) => (
              <Tr key={item.id}>
                <Td>{item.id}</Td>
                <Td>{item.id}</Td>
                <Td>{item.price}</Td>
                <Td>{item.date}</Td>
                <Td>
                  <IconButton
                    icon={<BsThreeDots />}
                    onClick={() => openModal(item)}
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
