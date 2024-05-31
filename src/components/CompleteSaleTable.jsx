import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import useSales from "../hooks/useSales";
import { useUser } from "@clerk/clerk-react";

const CompleteSaleTable = () => {
  const { sales } = useSales();
  const { user } = useUser();
  const name = user?.fullName;
  // Filter sales where paid is true
  const paidSales = sales.filter((sale) => sale.paid);

  return (
    <section className="">
      <TableContainer>
        <Table size="sm">
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Customer Name</Th>
              <Th>Products</Th>
              <Th>Products</Th>
              <Th>Quantity</Th>
              <Th>Invoice No</Th>
              <Th>Last Modified</Th>
            </Tr>
          </Thead>
          <Tbody>
            {paidSales.map((sale) => (
              <Tr key={sale.customer_id}>
                <Td>{sale.customer_id}</Td>
                <Td>{name}</Td>
                <Td>
                  {sale?.selectedProducts?.map((item, index) => (
                    <div key={index}>
                      <span>{item?.label}</span>
                      <br />
                    </div>
                  ))}
                </Td>
                <Td>
                  {sale?.items?.map((item, index) => (
                    <div key={index}>
                      <span>₹: {item?.price}</span>
                      <br />
                    </div>
                  ))}
                </Td>
                <Td>
                  {sale?.items?.map((item, index) => (
                    <div key={index}>
                      <span>{item?.quantity}</span>
                    </div>
                  ))}
                </Td>
                <Td>{sale.invoice_no}</Td>
                <Td>{sale.invoice_date}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </section>
  );
};

export default CompleteSaleTable;
