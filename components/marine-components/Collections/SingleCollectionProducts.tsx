"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import ProductsContainer from "@/components/marine-components/Products/ProductsContainer";
import SortView from "@/components/marine-components/SortView";
import { Products } from "@/types/interface";
import axios from "@/config/config";
import AllFilters from "../Filters/AllFilters";

const SingleCollectionProducts = () => {
  const [listCard, setListCard] = useState(false);
  const [gridCard, setGridCard] = useState(true);
  const [data, setData] = useState<Products[]>([]);
  const params = useParams<{ slug: string }>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/categories/${params.slug}`);
        console.log("Collection Data Detailed:", response.data);
        setData(response.data.products);
      } catch (errors) {
        console.log(errors);
      }
    };
    fetchData();
  }, [params.slug]);

  const toggleListHandler = () => {
    setListCard(true);
    setGridCard(false);
  };

  const toggleGridHandler = () => {
    setListCard(false);
    setGridCard(true);
  };

  return (
    <section className="container gap-5 grid items-start grid-cols-1 lg:grid-cols-[1fr_3fr] p-5 pb-10 md:py-10">
      <AllFilters />
      <div className="grid gap-5 lx:gap-10 content-start">
        <section className="w-full relative flex items-center justify-between">
          <span className="flex flex-col items-start gap-1">
            <h2 className=" text-2xl lg:text-3xl font-medium text-primary  capitalize">
              Categories Products
            </h2>
            <p className="text-base sm:text-lg text-secondray leading-5">
              Showing 1–9 of 35 results
            </p>
          </span>
          <SortView
            toggleGridHandler={toggleGridHandler}
            toggleListHandler={toggleListHandler}
            listView={listCard}
            gridView={gridCard}
          />
        </section>

        <ProductsContainer
          listView={listCard}
          gridView={gridCard}
          data={data}
        />
      </div>
    </section>
  );
};

export default SingleCollectionProducts;
