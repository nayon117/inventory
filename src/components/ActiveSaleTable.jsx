import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { Icon } from '@chakra-ui/react';
import { BsThreeDots } from "react-icons/bs";
import useSales from "../hooks/useSales";



const ActiveSaleTable = () => {
  const {sales} = useSales();

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
                  <Td>{item.price}</Td>
                  <Td>{item.date}</Td>
                  <Td>
                    <Icon as={BsThreeDots} />
                  </Td>
                </Tr>
              ))}

          </Tbody>
        </Table>
      </TableContainer>
    </section>
  );
};
export default ActiveSaleTable;
