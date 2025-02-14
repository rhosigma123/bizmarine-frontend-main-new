import React from "react";
import CategoryCard from "./CategoryCard";


function CategorySection({title}:{title:string}) {
  return (
    <section className="w-full py-10 biz__container relative h-auto flex flex-col gap-10 ">
      <h2 className=" text-lg md:text2xl lg:text-3xl  font-semibold text-primary ">
        {title}
      </h2>

      <section className="w-full  relative h-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  2xl:grid-cols-6 gap-5 ">
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
      </section>
    </section>
  );
}

export default CategorySection;
