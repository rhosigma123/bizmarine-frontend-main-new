import React, { useContext } from "react";
import WarrantyCard from "./WarrantyCard";
import ProductsDetail from "@/app/products/[slug]/page";
import { HomeContext } from "@/app/Context/HomeContext";

type ProductDetails = {
  id: number;
  name: string;
  image: string;
  alt_tag: string;
  description: string;
  slug: string | null;
  created_at: string;
  updated_at: string;
  order: number;
};

type BrandInterface = {
  branddata?: ProductDetails[];
  title: string;
};

function WarrentySection({ branddata, title }: BrandInterface) {
  const data = useContext(HomeContext);

  return (
    <>
      {data?.brand && (
        <section className="w-full relative h-auto flex biz__container py-10  flex-col gap-20">
          <h2 className=" text-lg md:text-2xl lg:text-3xl  font-semibold text-primary uppercase">
            {title}
          </h2>

          <section className="w-full realtive h-auto grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-10 gap-x-5">
            {data?.brand.map((item, index) => (
              <WarrantyCard
                productImage={item.image}
                brandImage={item.alt_tag}
                description={item.description}
                key={index}
              />
            ))}

            <div className="w-full relative flex h-[200px] md:h-auto items-center justify-center cursor-pointer rounded-xl border ">
              <p className="text-xl font-medium text-primary hover:underline ">
                View All
              </p>
            </div>
          </section>
        </section>
      )}
    </>
  );
}

export default WarrentySection;
