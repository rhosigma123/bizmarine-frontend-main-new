"use client";
import React, { useEffect, useState } from "react";
import CollectionCard from "./CollectionCard";
import { Categories } from "@/types/interface";
import axios from "@/config/config";
import { TbLoader2 } from "react-icons/tb";
import CategoryCard from "../Categories/CategoryCard";
import ViewProductSection from "../Home/ViewProductSection";
import MarineShopbanner from "../Home/MarineShopbanner";
import HeroSection from "../HeroSection";

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
    <>
      <div className="biz__container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 p-5 pb-10 md:py-10">
        {[1, 3, 5, 6, 5, 6].map((category: any) => (
          // <CollectionCard key={category.id} data={category} />
          <CategoryCard
            data={{
              slug: "",
              image: "/product-image.png",
              alt_tag: "",
              name: "Ayan mansoor",
              totalProducts: "120",
            }}
          />
        ))}
      </div>
      <MarineShopbanner />
      <HeroSection />
      <ViewProductSection />
    </>
  );
};

export default CollectionsContainer;
