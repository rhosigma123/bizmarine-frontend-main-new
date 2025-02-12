import Image from "next/image";
import React, { useContext } from "react";
import SearchField from "./SearchField";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="grid grid-cols-2 gap-5 biz__container py-10">
      <div className=" herobanner relative content-center h-[500px] w-full col-span-2 grid gap-5 grid-cols-2 p-10 rounded-xl">
        {/* <Image
          width={1400}
          height={500}
          loading="eager"
          priority={true}
          src={"/banner-image-large.png"}
          alt="Biz marne baner"
          className="absolute inset-0  -z-1"
        /> */}
        <h1 className="col-span-1 text-2xl md:text-3xl lg:text-5xl font-bold text-white/90">
          Looking for automation parts? Then Yor are at right place..!
        </h1>
        <p className="col-start-1 col-end-2 text-white text-xl">
          50% years of expereience in Marine Automation Industry
        </p>
        <Link
          className="col-start-1 col-end-2 bg-primary border px-5 w-fit py-2.5 rounded-full text-white"
          href={"/collection"}
        >
          Shop Now
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
