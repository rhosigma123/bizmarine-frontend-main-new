"use client";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import React, { CSSProperties, useContext, useEffect, useState } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import GoolgeReviewsCard from "./GoolgeReviewsCard";
import { HomeContext } from "@/app/Context/HomeContext";
import axios from "axios";
import apiClient from "@/config/config";

interface CustomCSSProperties extends CSSProperties {
  "--swiper-navigation-color"?: string;
  "--swiper-pagination-color"?: string;
  "--swiper-navigation-size"?: string;
  "--swiper-navigation-backGround"?: string;
}

export interface testimonialsinterface {
  alt_tag: string;
  comment: string;
  designation: string;
  id: number;
  name: string;
  order: number;
  photo: string;
}
[];

const GoogleReviewsSlider = () => {
  const swiperStyle: CustomCSSProperties = {
    "--swiper-navigation-color": "#fff",
    "--swiper-pagination-color": "#fff",
    "--swiper-navigation-size": "20px",
  };
  const [testimonialsdata, setestimonialsdata] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiClient.get(`/testimonials`);
        setestimonialsdata(response.data.testimonials);
      } catch (errors) {
        console.log(errors);
      }
    };
    fetchData();
  }, []);

  return (
    <Swiper
      slidesPerView={"auto"}
      spaceBetween={10}
      loop={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      navigation={true}
      modules={[Autoplay, Navigation]}
      className="mySwiper  w-full relative h-auto  px-0 lg:px-[30px]"
      style={swiperStyle}
    >
      {testimonialsdata?.map((testimonials: any, index: any) => (
        <SwiperSlide className="max-w-[200px] relative  h-auto  " key={index}>
          <GoolgeReviewsCard data={testimonials} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default GoogleReviewsSlider;
