"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Ayan = () => {
  return (
    <div>
      <section className=" container mx-auto px-20 relative h-fit w-full "></section>
      <section className=" container mx-auto  relative w-full mt-10 h-fit ">
        <div className=" grid grid-cols-3 h-auto relative  gap-10  ">
          <div className=" rounded-md group bg-slate-300 text-start h-fit w-full relative  p-2  group-hover:bg-red-400  hover:bg-red-400 transition-all ease duration-150 ">
            <Image
              src="/hero.jpg"
              alt=""
              height={200}
              width={200}
              className=" relative group-hover:text-white group-hover:bg-blend-multiply"
            />
            <p className="mr-[75px] p-2 group-hover:text-white">
              Leading the charge in energy, automation, and digital innovation,
              paving the way for a sustainable and connected tomorrow.
            </p>
            <Image
              src="/hero.jpg"
              alt=""
              height={200}
              width={200}
              className="  w-[130px] absolute -right-5 -bottom-3"
            />
          </div>
        </div>
      </section>

      <section className=" container mx-auto px-20 relative h-fit w-[900px] mt-10 mb-10 ">
        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          className="mySwiper h-[200px] "
        >
          <SwiperSlide className=" bg-pink-100 relatieve h-full w-full ">
            Slide 1
          </SwiperSlide>
        </Swiper>
      </section>

      <section className="bg-black h-auto w-full relative py-5 ">
        <div className="  relative flex w-full  flex-col items-center  h-full bg-transparent  xl:flex-row">
          <div className="bg-transparent relative text-center flex items-center flex-col w-[400px]  justify-center gap-2 ">
            <h2 className="font-bold text-white text-center text-[20px]">
              Excellent
            </h2>
            <div className="flex gap-2 relative ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                className="bi bi-star-fill text-gold"
                viewBox="0 0 16 16"
              >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                className="bi bi-star-fill text-gold"
                viewBox="0 0 16 16"
              >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                className="bi bi-star-fill text-gold"
                viewBox="0 0 16 16"
              >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                className="bi bi-star-fill text-gold"
                viewBox="0 0 16 16"
              >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
            </div>
            <p className="text-white text-[20px] font-bold">
              Based on 261 Review
            </p>
            <Image
              src="/hero.jpg"
              alt="Google  image "
              className="w-40  relative "
              width={100}
              height={100}
            />
          </div>

          <div className=" bg-transparent relative  h-full w-full  px-10 py-10 xl:w-[calc(100%-400px)]  ">
            <h2 className="text-center font-bold text-[30px] text-white mb-5">
              Customer Tales Beyond the Checkout
            </h2>
            <Swiper
              slidesPerView={2}
              spaceBetween={10}
              loop={true}
              navigation={true}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Pagination, Navigation]}
              // onAutoplayTimeLeft={onAutoplayTimeLeft}
              className="mySwiper h-[300px] relative  "
            >
              <SwiperSlide className=" bg-pink-100 relatieve h-full w-full ">
                Slide 1
              </SwiperSlide>
              <SwiperSlide className=" bg-pink-200 relatieve h-full w-full ">
                Slide 2
              </SwiperSlide>
              <SwiperSlide className=" bg-pink-100 relatieve h-full w-full ">
                Slide 3
              </SwiperSlide>
              <SwiperSlide className=" bg-pink-200 relatieve h-full w-full ">
                Slide 4
              </SwiperSlide>
              <SwiperSlide className=" bg-pink-100 relatieve h-full w-full ">
                Slide 5
              </SwiperSlide>
              <SwiperSlide className=" bg-pink-200 relatieve h-full w-full ">
                Slide 6
              </SwiperSlide>
              <SwiperSlide className=" bg-pink-100 relatieve h-full w-full ">
                Slide 7
              </SwiperSlide>
              <SwiperSlide className=" bg-pink-200 relatieve h-full w-full ">
                Slide 8
              </SwiperSlide>
              <SwiperSlide className=" bg-pink-100 relatieve h-full w-full ">
                Slide 9
              </SwiperSlide>
              <SwiperSlide className=" bg-pink-200 relatieve h-full w-full ">
                Slide 10
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
      {/* google review end */}
    </div>
  );
};

export default Ayan;
