import React from "react";
import Image from "next/image";
import Link from "next/link";

function CommonHeroBanner() {
  return (
    <section
      className={`w-full relative h-auto flex overflow-hidden items-center mt-5 lg:mt-10 rounded-lg justify-between  bg-white biz__container `}
    >
      <div className="w-full relative h-auto flex items-center rounded-xl overflow-hidden">
        <Image
          src={"/heroimage.png"}
          alt="viewProductimage"
          height={700}
          width={700}
          className="
           w-full  h-full object-cover absolute top-0 left-0 bottom-0 "
        />

        <div className="w-full relative  z-[1] h-full  grid lg:grid-cols-2 gap-4 px-4 md:px-5  lg:px-10 py-3 md:py-5 bg-gradient-to-r from-black from-30%  to-transparent ">
          <div className="w-full relative py-2 lg:py-5 h-auto flex flex-col gap-1 md:gap-3">
            <span className="w-full relative h-auto flex flex-col gap-0 lg:gap-2">
              <p className=" text-sm md:text-base font-medium text-white ">
                Unique application needs
              </p>
              <h2 className=" text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl  mt-2 font-semibold  text-white">
                Proffessional marine automation parts
              </h2>
            </span>
            <p className=" text-sm md:text-base  lg:mt-5 font-medium text-white">
              50 years of experience in Marine Automation Industry
            </p>

            <Link
              href={`/products`}
              className="text-white bg-primary hover:bg-white hover:border-primary border-transparent border hover:text-primary mt-2  lg:mt-5 px-3  md:px-5 py-1 md:py-2 rounded-lg  w-fit relative"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CommonHeroBanner;
