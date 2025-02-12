"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import ProductsContainer from "@/components/marine-components/Products/ProductsContainer";
import SortView from "@/components/marine-components/SortView";
import { Products } from "@/types/interface";
import axios from "@/config/config";
import AllFilters from "../Filters/AllFilters";

const SingleBrandProducts = () => {
  const [listCard, setListCard] = useState(false);
  const [gridCard, setGridCard] = useState(true);
  const [data, setData] = useState<Products[]>([]);
  const params = useParams<{ id: string }>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/brands/${params.id}`);
        console.log("Brands Data Detailed:", response.data);
        setData(response.data.products);
      } catch (errors) {
        console.log(errors);
      }
    };
    fetchData();
  }, []);

  const toggleListHandler = () => {
    setListCard(true);
    setGridCard(false);
  };

  const toggleGridHandler = () => {
    setListCard(false);
    setGridCard(true);
  };

  return (
    <section className="container gap-5 grid items-start md:grid-cols-[1fr_2fr] lg:grid-cols-[1fr_3fr] p-5 pb-10 md:py-10">
      <AllFilters />
      <div className="grid gap-5 content-start">
        <h2 className="text-2xl font-medium capitalize">fsdfsdfsd</h2>
        <p className="text-base sm:text-lg text-secondray-foreground leading-5"></p>
        <SortView
          toggleGridHandler={toggleGridHandler}
          toggleListHandler={toggleListHandler}
          listView={listCard}
          gridView={gridCard}
        />
        <ProductsContainer
          listView={listCard}
          gridView={gridCard}
          data={data}
        />
      </div>
    </section>
  );
};

export default SingleBrandProducts;
