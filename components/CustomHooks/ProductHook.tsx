import { useEffect, useState } from "react";
import { Products } from "@/types/interface";
import axios from "@/config/config";

const PAGE_SIZE = 20;

const useProductData = (currentPage?: number, filterFrom?: { from: number; to: number }) => {
  const [data, setData] = useState<Products[]>([]);
  const [filteredData, setFilteredData] = useState<Products[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get("/products", {
          params: {
            page: currentPage,
            page_size: PAGE_SIZE,
          },
        });
        setData(response.data.results.products);
        setTotalPages(Math.ceil(response.data.count / PAGE_SIZE));
        setError(null);
      } catch (err) {
        setError("Failed to fetch products.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [currentPage]);

  // Filter products based on range
  useEffect(() => {
    if(filterFrom?.from && filterFrom?.to){
    const filtered = data.filter(
      (product) => product.price >= filterFrom?.from && product.price <= filterFrom?.to
    );
    setFilteredData(filtered);
  }
    

  }, [data, filterFrom]);

  return { filteredData, totalPages, loading, error , data };
};

export default useProductData;
