"use client";
import { SingleBlogData, blog_category } from "@/types/interface";
import axios from "@/config/config";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import RelatedBlogsContainer from "./RelatedBlogsContainer";

const SingleBlog = () => {
  const [data, setData] = useState<SingleBlogData>();
  const params = useParams<{ slug: string }>();
  const [categories, setCategories] = useState<blog_category[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/blog/${params.slug}`);
        console.log("Single Blogs:", response.data);
        setData(response.data);
        setCategories(response.data.categories ?? []);
      } catch (errors) {
        console.log(errors);
      }
    };
    fetchData();
  }, [params.slug]);

  return (
    <section className="container p-5 md:py-10 grid grid-cols-[3fr_1fr] gap-5">
      <div className="border p-5 rounded-xl bg-secondary/40 grid gap-3">
        <div className="flex gap-4 flex-wrap">
          {categories?.length > 0 &&
            categories.map((category) => (
              <span
                key={category.id}
                className="bg-gray-200 text-sm px-4 py-2 rounded-md"
              >
                {category.name}
              </span>
            ))}
        </div>

        <h1 className="text-2xl text-primary font-bold text-center mb-3">
          {data?.blog?.title}
        </h1>
        <Image
          src={`${BASE_URL}${data?.blog?.banner || ""}`}
          width={500}
          height={400}
          loading="eager"
          className="w-full h-[400px] rounded-xl object-cover"
          alt={data?.blog.alt_tag}
        />
        <div className="flex gap-5 justify-between bg-primary p-3 rounded-xl text-white">
          <span>Read Time: {data?.blog?.read_time}</span>
          <span>Author: {data?.blog?.author}</span>
          <span>Added On: {data?.blog?.updated_at.split("T")[0] ?? ""}</span>
        </div>
        <p className="text-base text-secondary-foreground">
          {data?.blog?.description}
        </p>
      </div>

      <form
        className="border p-5 rounded-xl grid gap-3 bg-primary sticky top-[120px] h-fit"
        action=""
      >
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <button type="submit">Submit</button>
      </form>

      <RelatedBlogsContainer data={data?.related ?? []} />
    </section>
  );
};

export default SingleBlog;
