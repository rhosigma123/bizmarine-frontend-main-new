"use client";
import React, { useEffect, useState } from "react";
import CollectionCard from "./CollectionCard";
import { Categories } from "@/types/interface";
import axios from "@/config/config";
import { TbLoader2 } from "react-icons/tb";

const CollectionsContainer = () => {
  const [data, setData] = useState<Categories[] | null>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/categories");
        console.log("Categories Data:", response.data.results.categories);
        setData(response.data.results.categories);
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
      <h2 className="py-5 col-span-2 md:col-span-4 lg:col-span-5 text-2xl font-medium">
        Our Categories
      </h2>
      {data.map((category: any) => (
        <CollectionCard key={category.id} data={category} />
      ))}
    </div>
  );
};

export default CollectionsContainer;
