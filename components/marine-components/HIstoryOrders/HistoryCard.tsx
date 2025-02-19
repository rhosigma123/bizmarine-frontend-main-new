import React from "react";
import Image from "next/image";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import ProductTracking from "../Common/ProductTracking";
function HistoryCard() {
  return (
    <section className=" w-full relative  realtive h-auto lg:grid lg:grid-cols-[.7fr_3.5fr_1.3fr_1.3fr_auto] justify-between border py-2  px-2 items-center rounded-lg ">
      <p className="text-base font-meidum hidden lg:block text-secondary">
        #09019
      </p>

      <div className="w-full relative h-auto flex-col lg:flex-row flex items-center gap-1">
        <Image
          src={"/Drone-image.png"}
          alt="product image"
          height={300}
          width={300}
          className=" h-[100px] lg:h-[60px] w-full lg:w-[60px] rounded-md border object-cover "
        />
        <p className="text-sm font-medium text-secondary  line-clamp-1  lg:block hidden  ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, minus!
        </p>
        <p className="text-meidum text-sm text-secondary pl-1 hidden lg:block xl:pl-5">
          +2 More
        </p>
      </div>
      <span className="w-full relative  h-auto flex items-center justify-between">
        <p className="text-lg font-meidum text-primary ">$ 500</p>

        <p className="text-base font-meidum text-secondary lg:hidden">#09019</p>
      </span>
      <p className="text-base font-meidum text-secondary">
        {new Date().toDateString()}
      </p>
      <ProductTracking stage={"placed"} >
        <BiDotsHorizontalRounded className="text-[30px] text-secondary cursor-pointer" />
      </ProductTracking>
    </section>
  );
}

export default HistoryCard;
