"use client";
import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import axios from "@/config/config";
import { Blogs, blog_category } from "@/types/interface";
import Link from "next/link";
import CommonBanner from "../Common/CommonBanner";
import {
  MdKeyboardDoubleArrowRight,
  MdOutlineKeyboardDoubleArrowLeft,
} from "react-icons/md";
import ContentLoader from "react-content-loader";

const BlogContainer = () => {
  const [data, setData] = useState<Blogs[]>([]);
  const [categories, setCategories] = useState<blog_category[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/blog`);
        console.log("All Blogs:", response.data.blogs);

        const flattenedBlogs = response.data.blogs.flat();
        setData(flattenedBlogs);

        setCategories(response.data.blog_category);
      } catch (errors) {
        console.log(errors);
      }
    };
    fetchData();
  }, []);

  if (!data) {
    return (
      <section className="w-full reltive h-auto biz__container ">
        <ContentLoader viewBox="0 0 1360 900" height={900} width={1360}>
          <rect x="30" y="20" rx="8" ry="8" width="200" height="200" />
          <rect x="30" y="250" rx="0" ry="0" width="200" height="18" />
          <rect x="30" y="275" rx="0" ry="0" width="120" height="20" />
          <rect x="250" y="20" rx="8" ry="8" width="200" height="200" />
          <rect x="250" y="250" rx="0" ry="0" width="200" height="18" />
          <rect x="250" y="275" rx="0" ry="0" width="120" height="20" />
          <rect x="470" y="20" rx="8" ry="8" width="200" height="200" />
          <rect x="470" y="250" rx="0" ry="0" width="200" height="18" />
          <rect x="470" y="275" rx="0" ry="0" width="120" height="20" />
          <rect x="690" y="20" rx="8" ry="8" width="200" height="200" />
          <rect x="690" y="250" rx="0" ry="0" width="200" height="18" />
          <rect x="690" y="275" rx="0" ry="0" width="120" height="20" />
          <rect x="910" y="20" rx="8" ry="8" width="200" height="200" />
          <rect x="910" y="250" rx="0" ry="0" width="200" height="18" />
          <rect x="910" y="275" rx="0" ry="0" width="120" height="20" />
          <rect x="1130" y="20" rx="8" ry="8" width="200" height="200" />
          <rect x="1130" y="250" rx="0" ry="0" width="200" height="18" />
          <rect x="1130" y="275" rx="0" ry="0" width="120" height="20" />
          <rect x="30" y="340" rx="8" ry="8" width="200" height="200" />
          <rect x="30" y="570" rx="0" ry="0" width="200" height="18" />
          <rect x="30" y="595" rx="0" ry="0" width="120" height="20" />
          <rect x="250" y="340" rx="8" ry="8" width="200" height="200" />
          <rect x="250" y="570" rx="0" ry="0" width="200" height="18" />
          <rect x="250" y="595" rx="0" ry="0" width="120" height="20" />
          <rect x="470" y="340" rx="8" ry="8" width="200" height="200" />
          <rect x="470" y="570" rx="0" ry="0" width="200" height="18" />
          <rect x="470" y="595" rx="0" ry="0" width="120" height="20" />
          <rect x="690" y="340" rx="8" ry="8" width="200" height="200" />
          <rect x="690" y="570" rx="0" ry="0" width="200" height="18" />
          <rect x="690" y="595" rx="0" ry="0" width="120" height="20" />
          <rect x="910" y="340" rx="8" ry="8" width="200" height="200" />
          <rect x="910" y="570" rx="0" ry="0" width="200" height="18" />
          <rect x="910" y="595" rx="0" ry="0" width="120" height="20" />
          <rect x="1130" y="340" rx="8" ry="8" width="200" height="200" />
          <rect x="1130" y="570" rx="0" ry="0" width="200" height="18" />
          <rect x="1130" y="595" rx="0" ry="0" width="120" height="20" />
        </ContentLoader>
      </section>
    );
  }

  return (
    <>
      <CommonBanner title="Bizmarine Feedback" image="/Drone-image.png" />
      {/* <div className="py-10 biz__container ">
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Categories</h2>
          <div className="flex gap-4 flex-wrap">
            {categories.map((category) => (
              <Link
                href={`/blogs/category/${category.slug}`}
                key={category.id}
                className="bg-gray-200 text-sm px-4 py-2 rounded-md"
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="grid gap-8 grid-cols-4">
          {data.map((blog) => (
            <BlogCard key={blog.id} data={blog} />
          ))}
        </div>
      </div> */}

      <section className="w-full relative h-auto min-h-[400px] justify-between grid grid-cols-1  py-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4   gap-1 biz__container  ">
        {data.length <= 0 && (
          <p className="text-base h-full flex items-center justify-center  font-medium text-secondary ">
            There is no Blog Have Posted Yet .
          </p>
        )}

        {data.map((blog) => (
          <BlogCard key={blog.id} data={blog} />
        ))}
      </section>
      <div className="w-full relative h-auto biz__container pb-10   flex items-center gap-2 justify-end ">
        <button className="bg-websecondary border p-3 rounded-md border-webaccent ">
          <MdOutlineKeyboardDoubleArrowLeft className="text-primary text-[16px]" />
        </button>
        <span className=" relative flex  gap-1 w-auto ">
          <p className="text-sm rounded-md text-webtext font-medium border border-webtext px-4 flex items-center justify-center py-1">
            1
          </p>
          <p className="text-sm rounded-md text-webtext font-medium border  border-webtext px-4 flex items-center justify-center py-2">
            2
          </p>
          <p className="text-sm rounded-md text-webtext font-medium border  border-webtext px-4 flex items-center justify-center py-1">
            3
          </p>
          <p className="text-sm rounded-md text-webtext font-medium border  border-webtext px-4 flex items-center justify-center py-1">
            4
          </p>
        </span>
        <button className=" bg-websecondary border p-3 rounded-md border-webaccent  ">
          <MdKeyboardDoubleArrowRight className="text-primary text-[16px]" />
        </button>
      </div>
    </>
  );
};

export default BlogContainer;
