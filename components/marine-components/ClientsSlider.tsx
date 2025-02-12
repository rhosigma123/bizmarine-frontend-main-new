import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ClientsSliderProps } from "@/types/interface";
import { BASE_URL } from "@/config/config";

const ClientsSlider: React.FC<ClientsSliderProps> = ({ data }) => {
  return (
    <Swiper
      slidesPerView={8}
      spaceBetween={20}
      loop={true}
      modules={[Autoplay]}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        320: {
          slidesPerView: 2,
        },
        640: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 4,
        },
        1024: {
          slidesPerView: 7,
        },
      }}
      className="mySwiper"
    >
      {data.map((client) => (
        <SwiperSlide key={client.id} className="px-3">
          <Image
            src={`${BASE_URL}${client.logo || ""}`}
            alt={client.alt_logo}
            width={300}
            height={300}
            loading="lazy"
            className="object-contain w-full h-[50px]"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ClientsSlider;
