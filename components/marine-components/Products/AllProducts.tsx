"use client";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import React, { useEffect, useState } from "react";
import { Products } from "@/types/interface"; // Import only what you need
import axios from "@/config/config";
import AllFilters from "../Filters/AllFilters";
import SortView from "../SortView";
import ProductsContainer from "./ProductsContainer";
import ContentLoader from "react-content-loader";
import CategoryCollapsibel from "../Filters/MajorCategoryFilter";
import RangeSliderFilter from "../RangeFilter";
import useProductData from "@/components/CustomHooks/ProductHook";

const PAGE_SIZE = 20;

const AllProducts = () => {
  const [filterFrom, setFilterFrom] = useState({ from: 0, to: 100 });
  const [currentPage, setCurrentPage] = useState(1);
  const [Allbrands, setBrands] = useState();
  const [AllFilterdProducts, setAllFilterProducts] = useState<Products[]>([]);

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

  const { filteredData, totalPages, data } = useProductData(
    currentPage,
    filterFrom
  );

  // useEffect(() => {
  //   const brandFilterData =
  //     state.name === "all"
  //       ? data
  //       : filteredData.filter((item:any) => item.brand?.name === state.name);

  //   setAllFilterProducts(brandFilterData);
  //   console.log(brandFilterData,"ayan mansoor")
  // }, [state.name, data]);

  useEffect(() => {
    const filterBrandProducts = data.filter((item: any) => {
      return (
        state.name === "all" || (item.brand && item.brand.name === state.name)
      );
    });
    setAllFilterProducts(filterBrandProducts);
  }, [state.name, data]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <section className="biz__container gap-5 grid xl:grid-cols-[1fr_3fr] p-5 md:py-10">
      <div className="hidden xl:grid gap-3 h-fit lg:sticky top-20 bg-background border rounded-md p-5 self-start">
        <AllFilters setBrandState={setBrands} />
        <RangeSliderFilter rangeState={filterFrom} setrange={setFilterFrom} />
      </div>

      <div className="grid gap-5 content-start">
        <div className="w-full relative h-auto flex flex-col sm:flex-row items-start sm:items-center justify-between ">
          <span className="w-fit relative h-auto flex flex-col gap-1 ">
            <h2 className="text-3xl text-primary font-medium capitalize">
              Products
            </h2>
            <p className="text-lg  font-medium text-secondary ">
              Showing {currentPage} Of {totalPages} result
            </p>
          </span>

          <SortView
            toggleListHandler={dispatch}
            data={data}
            brandData={Allbrands}
          />
        </div>

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
          <ProductsContainer gridView={true} data={AllFilterdProducts}  cardcss="max-w-full"/>
        )}

        {/* Pagination */}
        <div className="justify-self-end mt-5">
          <ul className="flex gap-2 items-center">
            <li onClick={() => handlePageChange(currentPage - 1)}>
              <AiOutlineArrowLeft />
            </li>

            {Array.from({ length: totalPages }, (_, index) => (
              <li
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={`bg-primary grid place-content-center text-white w-10 h-10 cursor-pointer ${
                  currentPage === index + 1 ? "opacity-75" : ""
                }`}
              >
                {index + 1}
              </li>
            ))}

            <li onClick={() => handlePageChange(currentPage + 1)}>
              <AiOutlineArrowRight />
            </li>
          </ul>
        </div>
        {/* Pagination */}
      </div>
    </section>
  );
};

export default AllProducts;
