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
import ContentLoader from "react-content-loader";

const Home = () => {
  const [data, setData] = useState<HomePageData | null>(null);
  const [currentFilter1, setCurrentFilter1] = useState({
    newarrival: true,
    featured: false,
    popular: false,
  });
  const [currentFilter2, setCurrentFilter2] = useState({
    newarrival: true,
    featured: false,
    popular: false,
  });
  const [currentFilter3, setCurrentFilter3] = useState({
    newarrival: true,
    featured: false,
    popular: false,
  });

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

  const transformedCategories =
    data?.category.map((category) => ({
      ...category,
      status: category.status === "true" ? true : false, // Convert string to boolean
    })) || [];

  if (!data) {
    return (
      <section className="w-full relative pb-20 h-fit biz__container ">
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
      <HomeContext.Provider value={data}>
        {/* <HeroSection /> */}
        <ViewProductSection />
        <ProductFIlrterSection
          currentfilter={currentFilter1}
          setcurrentfilter={setCurrentFilter1}
          title={"POPULAR PRODUCTS"}
        />
        <CategorySection
          title={"Top Industrial and Marine Automation Categories"}
        />

        <ProductFIlrterSection
          currentfilter={currentFilter2}
          setcurrentfilter={setCurrentFilter2}
          title={"Marine Automation Products"}
        />
        <CategorySection
          title={"Top Industrial and Marine Automation Categories"}
        />

        <ProductFIlrterSection
          title={"POPULAR PRODUCTS"}
          currentfilter={currentFilter3}
          setcurrentfilter={setCurrentFilter3}
        />

        <WarrentySection  title={"500K+ Warrantied Parts, 100+ Brands"} />

        
      {/* <CategorySliderContainer /> */}
      {/* <ProductSliderContainer /> */}
        <ClientSliderContainer />
      </HomeContext.Provider>
    </>
  );
};

export default Home;
