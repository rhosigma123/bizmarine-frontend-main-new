"use client";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import React, { useEffect, useState } from "react";
import { Products } from "@/types/interface"; // Import only what you need
import axios from "@/config/config";
import AllFilters from "../Filters/AllFilters";
import SortView from "../SortView";
import ProductsContainer from "./ProductsContainer";

const PAGE_SIZE = 20;

const AllProducts = () => {
  const [data, setData] = useState<Products[]>([]);
  const [listCard, setListCard] = useState(false);
  const [gridCard, setGridCard] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/products", {
          params: {
            page: currentPage,
            page_size: PAGE_SIZE,
          },
        });
        console.log("Fetched products:", response.data);

        setData(response.data.results.products);
        setTotalPages(Math.ceil(response.data.count / PAGE_SIZE));
      } catch (errors) {
        console.log(errors);
      }
    };
    fetchData();
  }, [currentPage]);

  const toggleListHandler = () => {
    setListCard(true);
    setGridCard(false);
  };

  const toggleGridHandler = () => {
    setListCard(false);
    setGridCard(true);
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <section className="container gap-5 grid lg:grid-cols-[1fr_3fr] p-5 md:py-10">
      <AllFilters />
      <div className="grid gap-5 content-start">
        <span className="w-fit relative h-auto flex flex-col gap-1 ">
            <h2 className="text-3xl text-primary font-medium capitalize">Products</h2>
            <p className="text-lg  font-medium text-secondary ">Showing {} Of {data.length} result</p>
        </span>
        <SortView
          toggleGridHandler={toggleGridHandler}
          toggleListHandler={toggleListHandler}
          listView={listCard}
          gridView={gridCard}
        />
        <ProductsContainer
          gridView={gridCard}
          listView={listCard}
          data={data}
        />

        {/* Pagination */}
        <div className="justify-self-center">
          <ul className="flex gap-2 items-center">
            <li onClick={() => handlePageChange(currentPage - 1)}>
              <AiOutlineArrowLeft />
            </li>
            {Array.from({ length: totalPages }, (_, index) => (
              <li
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={`bg-primary grid place-content-center text-white w-10 h-10 cursor-pointer ${
                  currentPage === index + 1 ? "opacity-75" : ""
                }`}
              >
                {index + 1}
              </li>
            ))}
            <li onClick={() => handlePageChange(currentPage + 1)}>
              <AiOutlineArrowRight />
            </li>
          </ul>
        </div>
        {/* Pagination */}
      </div>
    </section>
  );
};

export default AllProducts;
