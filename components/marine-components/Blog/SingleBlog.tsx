"use client";
import { SingleBlogData, blog_category } from "@/types/interface";
import axios, { BASE_URL } from "@/config/config";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import RelatedBlogsContainer from "./RelatedBlogsContainer";
import BlogCard from "./BlogCard";

import AboutBanner from "../About/AboutBanner";
import CommonBanner from "../Common/CommonBanner";
import ContentLoader from "react-content-loader";

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

  if (!data) {
    return (
      <ContentLoader
      height={900}
      className="w-full biz__container"
      width={"100%"}
      viewBox="0 0 400 200"
      backgroundColor="#d9d9d9"
      foregroundColor="#ecebeb"
    >
      <rect x="15" y="15" rx="4" ry="4" width="130" height="10" />
      <rect x="155" y="15" rx="3" ry="3" width="130" height="10" />
      <rect x="295" y="15" rx="3" ry="3" width="90" height="10" />
      <rect x="15" y="50" rx="3" ry="3" width="90" height="10" />
      <rect x="115" y="50" rx="3" ry="3" width="60" height="10" />
      <rect x="185" y="50" rx="3" ry="3" width="200" height="10" />
      <rect x="15" y="90" rx="3" ry="3" width="130" height="10" />
      <rect x="160" y="90" rx="3" ry="3" width="120" height="10" />
      <rect x="290" y="90" rx="3" ry="3" width="95" height="10" />
      <rect x="15" y="130" rx="3" ry="3" width="130" height="10" />
      <rect x="160" y="130" rx="3" ry="3" width="225" height="10" />
    </ContentLoader>
    );
  }

  return (
    // <section className="container p-5 md:py-10 grid grid-cols-[3fr_1fr] gap-5">
    //   <div className="border p-5 rounded-xl bg-secondary/40 grid gap-3">
    //     <div className="flex gap-4 flex-wrap">
    //       {categories?.length > 0 &&
    //         categories.map((category) => (
    //           <span
    //             key={category.id}
    //             className="bg-gray-200 text-sm px-4 py-2 rounded-md"
    //           >
    //             {category.name}
    //           </span>
    //         ))}
    //     </div>

    //     <h1 className="text-2xl text-primary font-bold text-center mb-3">
    //       {data?.blog?.title}
    //     </h1>
    //     <Image
    //       src={`${BASE_URL}${data?.blog?.banner || ""}`}
    //       width={500}
    //       height={400}
    //       loading="eager"
    //       className="w-full h-[400px] rounded-xl object-cover"
    //       alt={data?.blog.alt_tag}
    //     />
    //     <div className="flex gap-5 justify-between bg-primary p-3 rounded-xl text-white">
    //       <span>Read Time: {data?.blog?.read_time}</span>
    //       <span>Author: {data?.blog?.author}</span>
    //       <span>Added On: {data?.blog?.updated_at.split("T")[0] ?? ""}</span>
    //     </div>
    //     <p className="text-base text-secondary-foreground">
    //       {data?.blog?.description}
    //     </p>
    //   </div>

    //   <form
    //     className="border p-5 rounded-xl grid gap-3 bg-primary sticky top-[120px] h-fit"
    //     action=""
    //   >
    //     <input type="text" />
    //     <input type="text" />
    //     <input type="text" />
    //     <input type="text" />
    //     <button type="submit">Submit</button>
    //   </form>

    //   <RelatedBlogsContainer data={data?.related ?? []} />
    // </section>

    <>
      <CommonBanner
        title="Bizmarine Feedback"
        image="/Drone-image.png"
        css="h-[300px] sm:h-[400px] md:h-[600px]"
      />

      <section className="w-full biz__container  lg:-mt-40 z-10 pb-10 h-auto grid lg:grid-cols-[.7fr_2fr] gap-10">
        {/* table of Content */}
        <section className="w-full gap-4   h-fit sticky top-20 hidden lg:flex flex-col  border p-5 rounded-lg bg-white">
          <h2 className="text-2xl font-medium text-primary ">
            Table of Content
          </h2>

          <ul className="w-full relative h-auto flex flex-col gap-2">
            <li className="w-full px-3  relative text-base font-medium text-foreground py-1  border-b ">
              SEction{" "}
            </li>

            <li className="w-full px-3  relative text-base font-medium text-foreground py-1  border-b ">
              SEction{" "}
            </li>
            <li className="w-full px-3  relative text-base font-medium text-foreground py-1  border-b ">
              SEction{" "}
            </li>
            <li className="w-full px-3  relative text-base font-medium text-foreground py-1  border-b ">
              SEction{" "}
            </li>
          </ul>
        </section>

        <section className="w-full relative bg-white p-10 rounded-lg h-auto flex  flex-col gap-4 roundend-lg ">
          <div className="w-full relative h-auto  flex-wrap flex items-center gap-3 text-base font-medium  text-secondary ">
            <p className=" text-base text-secondary">Help Center</p>/
            <p className=" text-base text-secondary">Buyer Knowledge Base</p>/
            <p className=" text-base text-foreground">
              t id ullam temporibus animi nihil
            </p>
          </div>

          <div className="w-full relative h-auto flex flex-col  gap-2">
            <h2 className="text-3xl font-medium text-primary ">About Us</h2>

            <p className="w-full relative  text-base font-medium text-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              modi accusantium, soluta voluptatum sit, ipsa, ea perferendis
              velit laboriosam delectus harum? Cupiditate in accusamus
              consequatur maxime nam inventore sint illo?
            </p>
            <Image
              src="/"
              alt=""
              height={500}
              width={500}
              className="w-full relartive h-[250px] lg:h-[300px]"
            />
          </div>
        </section>
      </section>

      <section className="w-full relative biz__container h-auto pb-10 flex flex-col gap-3">
        <h2 className="text-3xl font-medium text-primary ">Related blogs</h2>

        <div className="w-full relative h-auto grid grid-cols-2 lg:grid-cols-3 gap-2 ">
          {/* <BlogCard data={undefined}/> */}
        </div>
      </section>
    </>
  );
};

export default SingleBlog;
