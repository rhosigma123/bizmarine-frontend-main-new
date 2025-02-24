"use client";
import BrandsCard from "./BrandsCard";
import React, { useEffect, useState } from "react";
import { BrandsProps } from "@/types/interface";
import axios from "@/config/config";
import { TbLoader2 } from "react-icons/tb";
import ViewProductSection from "../Home/ViewProductSection";
import HeroSection from "../HeroSection";
import MarineShopbanner from "../Home/MarineShopbanner";
import ContentLoader from "react-content-loader";
import CommonHeroBanner from "../Common/CommonHeroBanner";

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
      <h1 className="h-[calc(100vh-150px)]  w-full relative ">
        <ContentLoader viewBox="0 0 100% 100%" height={"100%"} width={"100%"}>
          <rect x="30" y="20" rx="8" ry="8" width="200" height="200" />
          <rect x="30" y="250" rx="0" ry="0" width="200" height="18" />
          <rect x="30" y="275" rx="0" ry="0" width="120" height="20" />
          <rect x="250" y="20" rx="8" ry="8" width="200" height="200" />
          <rect x="250" y="250" rx="0" ry="0" width="200" height="18" />
          <rect x="250" y="275" rx="0" ry="0" width="120" height="20" />
          <rect x="470" y="20" rx="8" ry="8" width="200" height="200" />
          <rect x="470" y="250" rx="0" ry="0" width="200" height="18" />
          <rect x="470" y="275" rx="0" ry="0" width="120" height="20" />
          <rect x="690" y="20" rx="8" ry="8" width="200" height="200" />
          <rect x="690" y="250" rx="0" ry="0" width="200" height="18" />
          <rect x="690" y="275" rx="0" ry="0" width="120" height="20" />
          <rect x="910" y="20" rx="8" ry="8" width="200" height="200" />
          <rect x="910" y="250" rx="0" ry="0" width="200" height="18" />
          <rect x="910" y="275" rx="0" ry="0" width="120" height="20" />
          <rect x="1130" y="20" rx="8" ry="8" width="200" height="200" />
          <rect x="1130" y="250" rx="0" ry="0" width="200" height="18" />
          <rect x="1130" y="275" rx="0" ry="0" width="120" height="20" />
          <rect x="30" y="340" rx="8" ry="8" width="200" height="200" />
          <rect x="30" y="570" rx="0" ry="0" width="200" height="18" />
          <rect x="30" y="595" rx="0" ry="0" width="120" height="20" />
          <rect x="250" y="340" rx="8" ry="8" width="200" height="200" />
          <rect x="250" y="570" rx="0" ry="0" width="200" height="18" />
          <rect x="250" y="595" rx="0" ry="0" width="120" height="20" />
          <rect x="470" y="340" rx="8" ry="8" width="200" height="200" />
          <rect x="470" y="570" rx="0" ry="0" width="200" height="18" />
          <rect x="470" y="595" rx="0" ry="0" width="120" height="20" />
          <rect x="690" y="340" rx="8" ry="8" width="200" height="200" />
          <rect x="690" y="570" rx="0" ry="0" width="200" height="18" />
          <rect x="690" y="595" rx="0" ry="0" width="120" height="20" />
          <rect x="910" y="340" rx="8" ry="8" width="200" height="200" />
          <rect x="910" y="570" rx="0" ry="0" width="200" height="18" />
          <rect x="910" y="595" rx="0" ry="0" width="120" height="20" />
          <rect x="1130" y="340" rx="8" ry="8" width="200" height="200" />
          <rect x="1130" y="570" rx="0" ry="0" width="200" height="18" />
          <rect x="1130" y="595" rx="0" ry="0" width="120" height="20" />
        </ContentLoader>
      </h1>
    );
  }

  return (
    <>
      <section className="w-full relative h-auto pb-10">
        <div className="biz__container grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-2 md:gap-5 p-5 pb-10 md:py-10">
          {data.map((brand: any) => (
            <BrandsCard key={brand.id} data={brand} />
          ))}
        </div>
        <MarineShopbanner />
        <CommonHeroBanner />
        <ViewProductSection />
      </section>
    </>
  );
};

export default BrandsContainer;
