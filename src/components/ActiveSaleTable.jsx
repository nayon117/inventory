import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  IconButton,
  ModalBody,
  ModalCloseButton,
  ModalHeader,
  ModalContent,
  Modal,
  ModalOverlay,
} from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
import useSales from "../hooks/useSales";
import { useState } from "react";
import SaleForm from "./SaleForm";



const ActiveSaleTable = () => {
  const { sales, refetch } = useSales();
  const [selectedSale, setSelectedSale] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (sale) => {
    setSelectedSale(sale);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedSale(null);
    setIsModalOpen(false);
  };

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
                  {/* <Td>{item.customer_id}</Td> */}
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
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Sale</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <SaleForm sale={selectedSale} onClose={closeModal} refetch={refetch} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </section>
  );
};
export default ActiveSaleTable;
