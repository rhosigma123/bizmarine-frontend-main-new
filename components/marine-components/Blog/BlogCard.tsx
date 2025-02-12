import { BASE_URL } from "@/config/config";
import { BlogProps, Blogs } from "@/types/interface";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogCard: React.FC<BlogProps> = ({ data }) => {
  return (
    <div className="p-3 bg-white border rounded-xl">
      <h2 className="text-2xl font-semibold p-3 text-primary">{data.title}</h2>
      <Image
        width={500}
        height={500}
        src={`${BASE_URL}${data.image || ""}`}
        alt={data.alt_tag}
        className="w-full h-48 object-cover"
      />
      <p className="p-3">{data.description}</p>
      <div className="p-3 flex justify-between items-center">
        <span>{data.read_time}</span>
        <Link
          href={`/blogs/${data.slug}`}
          className="bg-primary text-white px-4 py-2 rounded-md"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
