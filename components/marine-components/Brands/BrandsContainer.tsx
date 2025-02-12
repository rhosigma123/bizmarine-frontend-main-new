"use client";
import BrandsCard from "./BrandsCard";
import React, { useEffect, useState } from "react";
import { BrandsProps } from "@/types/interface";
import axios from "@/config/config";
import { TbLoader2 } from "react-icons/tb";

const BrandsContainer = () => {
  const [data, setData] = useState<BrandsProps[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/brands");
        console.log("Brands Data:", response.data.brands);
        setData(response.data.brands);
      } catch (errors) {
        console.log(errors);
      }
    };
    fetchData();
  }, []);

  if (!data) {
    return (
      <h1 className="h-[calc(100vh-150px)] grid place-content-center">
        <TbLoader2 className="text-primary animate-spin text-2xl" />
      </h1>
    );
  }

  return (
    <div className="container grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 p-5 pb-10 md:py-10">
      {data.map((brand: any) => (
        <BrandsCard key={brand.id} data={brand} />
      ))}
    </div>
  );
};

export default BrandsContainer;
