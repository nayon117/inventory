import { useQuery } from "@tanstack/react-query";

const fetchSales = async () => {
  const sales = JSON.parse(localStorage.getItem("sales")) || [];
  return sales;
};

const useSales = () => {

  const { data: sales = [],refetch } = useQuery({
    queryKey: ['sales'],
    queryFn: fetchSales,
  });

  return { sales,refetch };
};

export default useSales;
