"use client";
import React, { useEffect, useState } from "react";
import CategoryCollapsibel from "@/components/marine-components/Filters/MajorCategoryFilter";
import axios from "@/config/config";
import { Categories } from "@/types/interface";

export interface allfiltersdata{
  setBrandState:React.Dispatch<React.SetStateAction<any>>

}

const AllFilters = ({setBrandState}:allfiltersdata) => {
  const [brandsData, setBrandsData] = useState(null);
  const [categoryData, setCategoryData] = useState<Categories[] | null>([]);


  useEffect(() => {
    const fetchBrandsData = async () => {
      try {
        const response = await axios.get("/brands");
        setBrandsData(response.data.brands);
        setBrandState(response.data.brands)
      } catch (errors) {
        console.error("Error fetching brands:", errors);
      }
    };
    fetchBrandsData();
  }, []);

  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const response = await axios.get("/categories");
        setCategoryData(response.data.results.categories);
      } catch (errors) {
        console.error("Error fetching categories:", errors);
      }
    };
    fetchCategoryData();
  }, []);

  return (
    <div className="hidden lg:grid gap-3 h-fit bg-background rounded-md  self-start">
      <CategoryCollapsibel data={categoryData} name="Categories"  />
      {/* <CategoryCollapsibel data={availabilityData} name="Availability" /> */}
      <CategoryCollapsibel data={brandsData} name="Brands" />
    </div>
  );
};

export default AllFilters;
