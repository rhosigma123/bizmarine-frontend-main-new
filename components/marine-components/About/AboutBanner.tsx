import React from "react";
import Image from "next/image";
import { Aboutbannerinterfce } from "@/types/interface";


function AboutBanner({image,title}:Aboutbannerinterfce) {
  return (
    <section className="w-full relative h-[40vh] sm:h-[40vh] md:h-[60vh] lg:h-[80vh] flex items-center ">
      <Image
        src={`${image}`}
        alt="banner image"
        height={1500}
        className="w-full relative h-full object-cover"
        width={1500}
      />

      <div className="w-full absolute top-0 left-0 right-0 z-[2] flex items-center  gap-5 flex-col  justify-end h-full  py-10  bg-gradient-to-t from-black/70 from-5% via-transparent via-90% ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="50"
          viewBox="0 0 46 64"
          fill="none"
        >
          <path
            d="M2.62964 22L23 2L43.3704 22M2.62964 42L23 22L43.3704 42M2.62964 62L23 42L43.3704 62"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <h1 className=" text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl  text-center font-thin text-white  ">
          {title}
        </h1>
      </div>
    </section>
  );
}

export default AboutBanner;
