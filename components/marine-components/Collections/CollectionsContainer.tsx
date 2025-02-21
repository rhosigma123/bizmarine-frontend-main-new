"use client";
import React, { useContext, useEffect, useState } from "react";
import CollectionCard from "./CollectionCard";
import { Categories } from "@/types/interface";
import axios from "@/config/config";
import { TbLoader2 } from "react-icons/tb";
import CategoryCard from "../Categories/CategoryCard";
import ViewProductSection from "../Home/ViewProductSection";
import MarineShopbanner from "../Home/MarineShopbanner";
import HeroSection from "../HeroSection";
import ContentLoader from "react-content-loader";
import CommonHeroBanner from "../Common/CommonHeroBanner";


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
      <section className="w-full relative h-fit biz__container ">
        <ContentLoader viewBox="0 0 500 300" height={"100%"} width={"100%"}>
          <rect x="19" y="64" rx="0" ry="0" width="465" height="200" />
          <rect x="18" y="225" rx="0" ry="0" width="141" height="38" />
          <rect x="182" y="225" rx="0" ry="0" width="141" height="38" />
          <rect x="343" y="225" rx="0" ry="0" width="141" height="38" />
          <rect x="18" y="270" rx="0" ry="0" width="141" height="38" />
          <rect x="182" y="270" rx="0" ry="0" width="141" height="38" />
          <rect x="343" y="270" rx="0" ry="0" width="141" height="38" />
          <rect x="18" y="225" rx="0" ry="0" width="141" height="38" />
          <rect x="182" y="225" rx="0" ry="0" width="141" height="38" />
          <rect x="343" y="225" rx="0" ry="0" width="141" height="38" />
          <rect x="18" y="270" rx="0" ry="0" width="141" height="38" />
          <rect x="182" y="270" rx="0" ry="0" width="141" height="38" />
          <rect x="343" y="270" rx="0" ry="0" width="141" height="38" />
          <rect x="18" y="225" rx="0" ry="0" width="141" height="38" />
          <rect x="182" y="225" rx="0" ry="0" width="141" height="38" />
          <rect x="343" y="225" rx="0" ry="0" width="141" height="38" />
          <rect x="18" y="270" rx="0" ry="0" width="141" height="38" />
          <rect x="182" y="270" rx="0" ry="0" width="141" height="38" />
          <rect x="343" y="270" rx="0" ry="0" width="141" height="38" />
          <rect x="19" y="64" rx="0" ry="0" width="465" height="200" />
        </ContentLoader>
      </section>
    );
  }

  return (
    <>
      <div className="biz__container grid grid-cols-2  md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 p-5 pb-10 md:py-10">
        {data.map((category: any,index) => (
          // <CollectionCard key={category.id} data={category} />
          <CategoryCard
            data={{
              slug: `${category.slug}`,
              image: `${category.image}`,
              alt_tag: `${category.alt_tag}`,
              name: `${category.name}`,
              totalProducts: `${data.length}`,
            }}
            key={index}
          />
        ))}
      </div>
      <MarineShopbanner />
      <CommonHeroBanner />
      <ViewProductSection />
    </>
  );
};

export default CollectionsContainer;
