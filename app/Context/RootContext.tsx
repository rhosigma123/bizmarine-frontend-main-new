"use client";
import { createContext, useState, useEffect, ReactNode } from "react";
import { MainInfo } from "@/types/interface";
import apiClient from "@/config/config";

export const RootContext = createContext<MainInfo | null>(null);

export const RootProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<MainInfo | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiClient.get("/main-info");
        
        setData(response.data.data);  
        console.log(response.data)
      } catch (errors) {
        console.log(errors);
      }
    };

    fetchData();
  }, []);

  return <RootContext.Provider value={data}>{children}</RootContext.Provider>;
};
