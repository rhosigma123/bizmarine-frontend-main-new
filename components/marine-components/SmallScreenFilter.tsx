import { BiFilter } from "react-icons/bi";
import React, { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Categories } from "@/types/interface";
import AllFilters from "./Filters/AllFilters";
import axios from "axios";
import CategoryCollapsibel from "./Filters/MajorCategoryFilter";
import RangeSliderFilter from "./RangeFilter";

const SmallScreenFilter = () => {
  const [brandsData, setBrandsData] = useState(null);
  const [availabilityData, setAvailabilityData] = useState(null);
  const [categoryData, setCategoryData] = useState<Categories[] | null>([]);

  useEffect(() => {
    const fetchBrandsData = async () => {
      try {
        const response = await axios.get("/brands");
        setBrandsData(response.data.brands);
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
  const side = "right";
  return (
    <Sheet>
      <SheetTrigger className="flex h-full lg:hidden items-center gap-3 border rounded-md px-3 py-1 bg-white">
        Filters <BiFilter />
      </SheetTrigger>
      <SheetContent side={side}>
        <SheetHeader>
          <SheetTitle className="w-full relative h-auto text-2xl font-medium border-b py-5 px-2 text-foreground ">
            Filter For Products
          </SheetTitle>
          <SheetDescription className="w-full relative h-auto p-5 flex ">
            <div className="grid gap-3 w-full h-fit lg:sticky top-20 bg-background   self-start">
              <CategoryCollapsibel data={categoryData} name="Categories" />
              <CategoryCollapsibel
                data={availabilityData}
                name="Availability"
              />
              <CategoryCollapsibel data={brandsData} name="Brands" />
              <RangeSliderFilter />
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default SmallScreenFilter;
