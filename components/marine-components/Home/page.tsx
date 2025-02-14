// Home.tsx
"use client";
import { TbLoader2 } from "react-icons/tb";
import React, { useEffect, useState } from "react";
import { HomePageData } from "@/types/interface";
import ClientSliderContainer from "@/components/marine-components/ClientSliderContainer";
import CategorySliderContainer from "@/components/marine-components/Collections/CategorySliderContainer";
import GoogleReviewsSection from "@/components/marine-components/GoogleReviews/GoogleReviewsSection";
import HeroSection from "@/components/marine-components/HeroSection";
import KeyPointsSection from "@/components/marine-components/key-points/KeyPointsSection";
import ProductSliderContainer from "@/components/marine-components/Products/ProductSliderContainer";
import { HomeContext } from "@/app/Context/HomeContext";
import apiClient from "@/config/config";
import ViewProductSection from "./ViewProductSection";
import MarineShopbanner from "./MarineShopbanner";
import CategorySection from "../Categories/CategorySection";
import ProductFIlrterSection from "../Products/ProductFIlrterSection";
import WarrentySection from "./WarrentySection";

const Home = () => {
  const [data, setData] = useState<HomePageData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiClient.get("/home");
        console.log("Response Data:", response.data);
        setData(response.data.data);
      } catch (errors) {
        console.log(errors);
      }
    };
    fetchData();
  }, []);

  // if (!data) {
  //   return (
  //     <h1 className="h-[calc(100vh-150px)] grid place-content-center">
  //       <TbLoader2 className="text-primary animate-spin text-2xl" />
  //     </h1>
  //   );
  // }

  return (
    <>
      <HomeContext.Provider value={data}>
      <HeroSection />

      
      <ViewProductSection />
      <ProductFIlrterSection title={"POPULAR PRODUCTS"} cardcss={" h-[150px] md:h-[200px] "} />
      <MarineShopbanner />
      <CategorySection title={"Top Industrial and Marine Automation Categories"} />
      <ProductFIlrterSection title={"Marine Automation Products"} cardcss={" h-[150px] md:h-[200px] "} />
      <MarineShopbanner />
      <CategorySection title={"Top Industrial and Marine Automation Categories"} />

      <ProductFIlrterSection title={"POPULAR PRODUCTS"}  />
      <MarineShopbanner />

      <WarrentySection/>
      

      <KeyPointsSection />
      <CategorySliderContainer />
      <ProductSliderContainer />
      <ClientSliderContainer />
    </HomeContext.Provider>
    </>
  );
};

export default Home;
