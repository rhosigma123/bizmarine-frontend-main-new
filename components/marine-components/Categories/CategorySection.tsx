import React, { useContext } from "react";
import CategoryCard from "./CategoryCard";
import { HomeContext } from "@/app/Context/HomeContext";

interface Category {
  id: number;
  name: string;
  image: string;
  alt_tag: string;
  description: string;
  slug: string | null;
  created_at: string;
  updated_at: string;
  status: boolean;
  order: number;
}

interface CardSectionProps {
  title: string;

}

function CategorySection({ title }: CardSectionProps) {

  const data = useContext(HomeContext);
  return (
    <section className="w-full py-10 biz__container relative h-auto flex flex-col gap-10 ">
      <h2 className=" text-xl md:text2xl lg:text-3xl  font-semibold text-primary ">
        {title}
      </h2>

      <section className="w-full  relative h-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  2xl:grid-cols-4 gap-5 ">
        {data?.category?.map((item, index) => (
          <CategoryCard
            data={{
              slug: `${item.slug}`,
              image: `${item.image}`,
              alt_tag: `${item.alt_tag}`,
              name: `${item.name}`,
              totalProducts:`${data.category.length}`,
            }}
            key={index}
          />
        ))}

        {/* <CategoryCard
          data={{
            slug: "",
              image: "/product-image.png",
            alt_tag: "",
            name: "Ayan mansoor",
            totalProducts: "120",
          }}
        />
        <CategoryCard
          data={{
            slug: "",
              image: "/product-image.png",
            alt_tag: "",
            name: "Ayan mansoor",
            totalProducts: "120",
          }}
        />
        <CategoryCard
          data={{
            slug: "",
              image: "/product-image.png",
            alt_tag: "",
            name: "Ayan mansoor",
            totalProducts: "120",
          }}
        />
        <CategoryCard
          data={{
            slug: "",
              image: "/product-image.png",
            alt_tag: "",
            name: "Ayan mansoor",
            totalProducts: "120",
          }}
        />
        <CategoryCard
          data={{
            slug: "",
              image: "/product-image.png",
            alt_tag: "",
            name: "Ayan mansoor",
            totalProducts: "120",
          }}
        />
        <CategoryCard
          data={{
            slug: "",
              image: "/product-image.png",
            alt_tag: "",
            name: "Ayan mansoor",
            totalProducts: "120",
          }}
        />
        <CategoryCard
          data={{
            slug: "",
            image: "/product-image.png",
            alt_tag: "",
            name: "Ayan mansoor",
            totalProducts: "120",
          }}
        /> */}
      </section>
    </section>
  );
}

export default CategorySection;
