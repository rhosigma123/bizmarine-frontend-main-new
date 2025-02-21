import { BASE_URL } from "@/config/config";
import { BlogProps, Blogs } from "@/types/interface";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const BlogCard: React.FC<BlogProps> = ({ data }) => {
  return (
    <Link href={`blogs/${data.slug}`} className="p-3 bg-white border rounded-xl">
      <Image
        width={500}
        height={500}
        src={`${BASE_URL}${data.image || ""}`}
        alt={data.alt_tag}
        className="w-full h-48 object-cover"
      />

      <div className="w-full rel;ative h-auto flex flex-col gap-1 pt-2">
        <span className="w-full relative h-auto flex items-center justify-between gap-2">
           <p className="text-base font-medium text-secondary ">{data.read_time}</p>
           <p className="text-base font-medium text-secondary underline list-disc ">{data.author}</p>
        </span>
        <h2 className="text-lg font-semibold  text-primary underline">{data.title}</h2>
        <p className=" line-clamp-3 text-base font-medium text-secondary">{data.description}</p>

        <Link href={`blogs/${data.slug}`} className="text-base font-medium text-secondary flex items-center gap-1  ">
          Read Blogs 
        <MdOutlineKeyboardArrowRight className="text-[20px] "/>
        </Link>
      </div>
    </Link>
  );
};

export default BlogCard;
