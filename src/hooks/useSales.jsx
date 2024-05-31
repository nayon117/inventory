import { useQuery } from "@tanstack/react-query";

const useSales = () => {
  const { data: sales = [], refetch } = useQuery({
    queryKey: ["sales"],
    queryFn: async () => {
      const sales = JSON.parse(localStorage.getItem("sales")) || [];
      return sales;
    },
  });

  return { sales, refetch };
};

export default useSales;
