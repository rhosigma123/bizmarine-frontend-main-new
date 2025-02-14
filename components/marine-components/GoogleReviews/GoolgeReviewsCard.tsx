import { TiStarHalf } from "react-icons/ti";
import { TiStarHalfOutline } from "react-icons/ti";
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import Image from "next/image";
import React from "react";
import { TestimonialsCardProps } from "@/types/interface";
import { BASE_URL } from "@/config/config";

const GoolgeReviewsCard: React.FC<TestimonialsCardProps> = ({ data }) => {
  console.log("testimonials ", data);

  return (
    <div className="border relative content-start rounded-lg gap-3 grid bg-white p-5">
      <div className="grid gap-x-3 grid-cols-[50px_auto]">
        <Image
          className="row-span-2 rounded-full h-[50px] w-[50px] object-cover"
          src={`${BASE_URL}${data.photo || ""}`}
          width={100}
          height={100}
          alt={data.alt_tag}
          loading="lazy"
        /> 
        <strong className="text-lg text-secondary-foreground font-medium">
          {data.name}
        </strong>
        <span className="text-sm text-secondary-foreground/60">
          {data.designation}
        </span>
      </div>
      <Image
        className="row-span-2 rounded-full absolute top-5 right-5 h-[40px] w-[40px] object-contain"
        src={"/google.png"}
        width={50}
        height={50}
        alt="Google"
        loading="lazy"
      />
      <div className="flex gap-0 items-center text-[#e3bd00] text-xl">
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiOutlineStar />
      </div>
      <p className="text-base text-secondary-foreground/60 line-clamp-4">
        {data.comment}
      </p>
    </div>
  );
};

export default GoolgeReviewsCard;
