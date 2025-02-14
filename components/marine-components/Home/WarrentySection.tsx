import React from "react";
import WarrantyCard from "./WarrantyCard";
function WarrentySection() {
  return (
    <section className="w-full relative h-auto flex biz__container py-20  flex-col gap-20">
      <h2 className=" text-lg md:text-2xl lg:text-3xl  font-semibold text-primary uppercase">
        500K+ Warrantied Parts, 100+ Brands
      </h2>

      <section className="w-full realtive h-auto grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-10 gap-x-5">
        <WarrantyCard
          productImage={"/warranty-image.png"}
          brandImage={"/abb-brand.png"}
          description={
            "Shaping sustainability through excellence in electrification and automation, forging a brighter future."
          }
        />
        <WarrantyCard
          productImage={"/warranty-image.png"}
          brandImage={"/abb-brand.png"}
          description={
            "Shaping sustainability through excellence in electrification and automation, forging a brighter future."
          }
        />
        <WarrantyCard
          productImage={"/warranty-image.png"}
          brandImage={"/abb-brand.png"}
          description={
            "Shaping sustainability through excellence in electrification and automation, forging a brighter future."
          }
        />
        <WarrantyCard
          productImage={"/warranty-image.png"}
          brandImage={"/abb-brand.png"}
          description={
            "Shaping sustainability through excellence in electrification and automation, forging a brighter future."
          }
        />

            <WarrantyCard
          productImage={"/warranty-image.png"}
          brandImage={"/abb-brand.png"}
          description={
            "Shaping sustainability through excellence in electrification and automation, forging a brighter future."
          }
        />
        <WarrantyCard
          productImage={"/warranty-image.png"}
          brandImage={"/abb-brand.png"}
          description={
            "Shaping sustainability through excellence in electrification and automation, forging a brighter future."
          }
        />
        <WarrantyCard
          productImage={"/warranty-image.png"}
          brandImage={"/abb-brand.png"}
          description={
            "Shaping sustainability through excellence in electrification and automation, forging a brighter future."
          }
        />

        <div className="w-full relative flex items-center justify-center cursor-pointer rounded-xl border ">
            <p className="text-xl font-medium text-primary hover:underline ">View All</p>
        </div>

      </section>
    </section>
  );
}

export default WarrentySection;
