"use client";
import Image from "next/image";
import React, { useContext } from "react";
import SearchField from "./SearchField";
import Link from "next/link";
import { Button } from "../ui/button";
import { BASE_URL } from "@/config/config";

export  interface  HerobannerSection{
  title:string,
  subtitle:string,
  image:string,
  btntitle:string,
  btnurl:string,
  css?:string
}

const HeroSection = ({title,css,subtitle,image,btntitle,btnurl}:HerobannerSection) => {
  return (
    <section className={`w-full relative h-auto flex overflow-hidden items-center mt-10 rounded-lg justify-between  bg-white ${css ? css:"biz__container"} `}>
      <div className="w-full relative h-auto flex items-center rounded-xl overflow-hidden">
        <Image
          src={`${BASE_URL}${image}`}
          alt="viewProductimage"
          height={700}
          width={700}
          className="
           w-full  h-full object-cover absolute top-0 left-0 bottom-0 "
        />

        <div className="w-full relative  z-[1] h-full  grid lg:grid-cols-2 gap-4 px-10 py-5 bg-gradient-to-r from-black from-30%  to-transparent ">
          <div className="w-full relative py-5 h-auto flex flex-col gap-3">
            <span className="w-full relative h-auto flex flex-col gap-2">
              <p className=" text-sm md:text-base font-medium text-white ">
                Unique application needs
              </p>
              <h2 className="  text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl  mt-2 font-semibold  text-white">
                {title}
              </h2>
            </span>
            <p className=" text-sm md:text-base mt-5 font-medium text-white">
              {subtitle}
            </p>

            <Link href={`${btnurl}`} className="text-white bg-primary hover:bg-white hover:border-primary border-transparent border hover:text-primary mt-5 px-5 py-2 rounded-lg  w-fit relative">
              {btntitle}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
