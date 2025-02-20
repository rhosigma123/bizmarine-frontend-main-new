"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import ProductsContainer from "@/components/marine-components/Products/ProductsContainer";
import SortView from "@/components/marine-components/SortView";
import { Products } from "@/types/interface";
import axios from "@/config/config";
import AllFilters from "../Filters/AllFilters";

import RangeSliderFilter from "../RangeFilter";
import ContentLoader from "react-content-loader";
import useBrandProductData from "@/components/CustomHooks/BrandProducts";

const SingleBrandProducts = () => {
  const [filterFrom, setFilterFrom] = useState({ from: 0, to: 100 });
  const [AllFilterdProducts, setAllFilterProducts] = useState<Products[]>([]);
  const [Allbrands, setBrands] = useState();
  const params = useParams<{ slug: string }>();
  const dropdownreducer = (
    state: { name: string },
    action: { type: string; payload?: { name?: string } }
  ) => {
    switch (action.type) {
      case "change_brand":
        return { ...state, name: action.payload?.name || "" };
      default:
        return state;
    }
  };
  const [state, dispatch] = React.useReducer(dropdownreducer, { name: "all" });

  const { data, isLoading, error } = useBrandProductData(params.slug || "");

  console.log(data)

 

  const currentbrand=[
    {
      name:`${params.slug}`.split("-").join(" ")
    }
  ]


  

  return (
    <section className=" biz__container gap-5 grid items-start md:grid-cols-[1fr_2fr] lg:grid-cols-[1fr_3fr] p-5 pb-10 md:py-10">
      <div className="hidden lg:grid gap-3 h-fit lg:sticky top-20 bg-background border rounded-md p-5 self-start">
        <AllFilters setBrandState={setBrands} />
        <RangeSliderFilter rangeState={filterFrom} setrange={setFilterFrom} />
      </div>
      <div className="grid gap-5 content-start">
        <section className="w-full relative h-auto flex items-center justify-between">
          <h2 className="text-3xl font-medium text-primary  capitalize">Brand Products</h2>
          <p className="text-base sm:text-lg text-secondray-foreground leading-5"></p>
     
          <SortView
            toggleListHandler={dispatch}
            data={data}
            brandData={currentbrand}
          />

        </section>
        {AllFilterdProducts.length <= 0 ? (
          <ContentLoader viewBox="0 0 90% 900" height={700} width={"100%"}>
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
        ) : (
          <ProductsContainer gridView={true} data={AllFilterdProducts} />
        )}
      </div>
    </section>
  );
};

export default SingleBrandProducts;
