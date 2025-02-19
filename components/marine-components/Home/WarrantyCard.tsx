import React from "react";
import Image from "next/image";
import { WarrentyCard } from "@/types/interface";
import { BASE_URL } from "@/config/config";

function WarrantyCard({ productImage, brandImage, description }: WarrentyCard) {
  return (
    <section className=" max-w-[350px] mx-auto sm:w-full relative h-auto bg-lightgray rounded-lg p-3 md:p-5  ">
      <div className="w-full relative flex items-start flex-col h-auto  ">
        <Image
          src="/product-image.png"
          alt="product image"
          height={500}
          width={500}
          className="w-[100px] h-auto self-end -mt-6 lg:-mt-10 "
        />

        <span className="w-fit relative h-auto flex flex-col items-start gap-3">
          {/* <Image src={brandImage} height={300} width={300} className='w-[80px] h-auto object-contain' alt='Compnay name'/> */}
          <p className="text-base font-medium text-secondary">{description}</p>
        </span>
      </div>
    </section>
  );
}

export default WarrantyCard;
