"use client";
import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import axios from "@/config/config";
import { Blogs, blog_category } from "@/types/interface";
import Link from "next/link";

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

  return (
    <div className="py-10 container">
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

      <div className="grid gap-8 grid-cols-3">
        {data.map((blog) => (
          <BlogCard key={blog.id} data={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogContainer;
