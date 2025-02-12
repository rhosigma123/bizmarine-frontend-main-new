import { BASE_URL } from "@/config/config";
import { RelatedBlogProps, RelatedBlogs } from "@/types/interface";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const RelatedBlogsContainer: React.FC<RelatedBlogProps> = ({ data }) => {
  return (
    <>
      {data &&
        data.map((related) => (
          <div key={related.id} className="p-3 bg-white border rounded-xl">
            <h2 className="text-2xl font-semibold p-3 text-primary">
              {related.title}
            </h2>
            <Image
              width={500}
              height={500}
              src={`${BASE_URL}${related.image || ""}`}
              alt={related.alt_tag}
              className="w-full h-48 object-cover"
            />
            <p className="p-3">{related.description}</p>
            <div className="p-3 flex justify-between items-center">
              <span>{related.read_time}</span>
              <Link
                href={`/blogs/${related.slug}`}
                className="bg-primary text-white px-4 py-2 rounded-md"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
    </>
  );
};

export default RelatedBlogsContainer;
