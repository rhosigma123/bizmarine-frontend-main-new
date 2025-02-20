import { useEffect, useState } from "react";
import axios from "axios";
import { Products } from "@/types/interface";

interface UseBrandProductDataResult {
  data: Products[];
  isLoading: boolean;
  error: string | null;
  fetchBrandData: (slug: string) => Promise<void>; 
}

const useBrandProductData = (slug: string): UseBrandProductDataResult => {
  const [data, setData] = useState<Products[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchBrandData = async (slug: string) => {
    setIsLoading(true);
    setError(null); // Reset error before fetching new data
    try {
      const response = await axios.get(`/brands/${slug}`);
      setData(response.data.products || []);
    } catch (err: any) {
      console.error("Error fetching brand data:", err);
      setError(err.message || "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBrandData(slug);
  }, [slug]);

  return { data, isLoading, error, fetchBrandData };
};

export default useBrandProductData;
