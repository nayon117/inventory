import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Icon } from '@chakra-ui/react';
import { BsThreeDots } from "react-icons/bs";


const ActiveSaleTable = () => {
  const [sale, setSale] = useState([]);
  useEffect(() => {
    fetch("/sale.json")
      .then((res) => res.json())
      .then((data) => setSale(data));
  }, []);
  console.log(sale)
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

              {sale.map((item) => (
                <Tr key={item.customer_id}>
                  <Td>{item.customer_id}</Td>
                  <Td>{item.customer_id}</Td>
                  <Td>{item.items[0].price}</Td>
                  <Td>{item.invoice_date}</Td>
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
