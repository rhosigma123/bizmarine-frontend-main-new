"use client";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { CSSProperties } from "react";
import dynamic from "next/dynamic"; // Dynamically load App (ImageZoom)
import App from "../ImageZoom";
import { BASE_URL } from "@/config/config";

// Dynamically import the ImageZoom component to ensure it's only used on the client side
const ImageZoom = dynamic(() => import("../ImageZoom"), { ssr: false });

interface CustomCSSProperties extends CSSProperties {
  "--swiper-navigation-color"?: string;
  "--swiper-pagination-color"?: string;
  "--swiper-navigation-size"?: string;
  "--swiper-navigation-backGround"?: string;
}

const swiperSlides = [
  { IMAGE: "/hero.jpg", NAME: "Classic Swimming Pool" },
  { IMAGE: "/hero.jpg", NAME: "Inhouse Theater" },
  { IMAGE: "/hero.jpg", NAME: "Sport Court" },
  { IMAGE: "/hero.jpg", NAME: "Intuitive Library" },
  { IMAGE: "/hero.jpg", NAME: "24X7 Surveillance" },
  { IMAGE: "/hero.jpg", NAME: "Beautiful Banquet" },
];

const SingleProductSlider = (props: any) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const swiperStyle: CustomCSSProperties = {
    "--swiper-navigation-color": "#fff",
    "--swiper-pagination-color": "#fff",
    "--swiper-navigation-size": "20px",
    "--swiper-navigation-backGround": "#fff",
  };

  return (
    <>
      <Swiper
        style={swiperStyle}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 w-full mb-3"
      >
        {swiperSlides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="cursor-grab h-[500px] grid place-content-center"
          >
            {isClient && <App picture={props.picture} alt={props.alt} />}
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper w-full"
      >
        {swiperSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Image
              src={`${BASE_URL}${props.picture || ""}`}
              alt={props.alt}
              width={500}
              height={300}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SingleProductSlider;
