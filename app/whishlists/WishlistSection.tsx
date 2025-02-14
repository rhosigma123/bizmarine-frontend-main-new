import React from "react";
import { BsThreeDots } from "react-icons/bs";
import ProductGridCard from "@/components/marine-components/Products/ProductGridCard";

function WishlistSection() {
  return (
    <section className="w-full biz__container relative h-auto flex flex-col items-start gap-10 md:gap-20 py-10 md:py-20">
      <span className="w-full relative h-auto border-b py-3 flex items-center justify-between ">
        <h2 className="text-3xl font-medium text-primary uppercase flex items-center gap-4 ">
          MY Whishlist
          <p className="text-base font-medium text-secondary ">10 Products</p>
        </h2>

        <BsThreeDots  className="text-[20px] text-primary cursor-pointer"/>
      </span> 

    <section className="w-full relative h-auto grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-5 ">
    <ProductGridCard data={[]}/>
    <ProductGridCard data={[]}/>
    <ProductGridCard data={[]}/>
    </section>


    </section>
  );
}

export default WishlistSection;
