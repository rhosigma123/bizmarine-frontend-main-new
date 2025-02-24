import React, { useEffect, useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import apiClient from "@/config/config";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Megamenucard from "./Megamenucard";
import { Products } from "@/types/interface";
import axios from "axios";

interface Category {
  id: number;
  name: string;
  image: string;
  description: string;
  alt_tag: string;
  slug: string;
}

interface MegaMenuProps {
  children: React.ReactNode;
  data: any;
}

function MegaMenu({ children, data = [] }: MegaMenuProps) {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    data.length > 0 ? data[0] : null
  );
  const [selectedProducts, setSelectedProducts] = useState<Products[]>([]);

  // Function to fetch category products
  const fetchCategoryProducts = async (slug: string | undefined) => {
    if (!slug) return;
    try {
      const response = await apiClient.get(`/categories/${slug}`);

      if (response?.data?.products) {
        setSelectedProducts(response.data.products);
      } else {
        setSelectedProducts([]);
      }
    } catch (error) {
      console.error("Error fetching product data:", error);
      setSelectedProducts([]);
    }
  };

  // Trigger fetch when the selected category changes
  useEffect(() => {
    if (selectedCategory) {
      fetchCategoryProducts(selectedCategory.slug);
    }
  }, [selectedCategory]);
  //  const [data, setData] = useState<Products[]>([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(`/categories/${params.slug}`);
  //       console.log("Collection Data Detailed:", response.data);
  //       setData(response.data.products);
  //     } catch (errors) {
  //       console.log(errors);
  //     }
  //   };
  //   fetchData();
  // }, [params.slug]);

  return (
    <NavigationMenu className="relative w-full">
      <NavigationMenuList className="relative w-full">
        <NavigationMenuItem>
          <NavigationMenuTrigger className="w-full z-[1] relative h-auto hover:bg-transparent bg-transparent flex items-center justify-between">
            {children}
          </NavigationMenuTrigger>

          <NavigationMenuContent className="w-screen relative bg-white h-[70vh]">
            <section className="w-full biz__container bg-white gap-2 h-full grid grid-cols-[1fr_3fr] py-5">
              {/* Left Column: Categories */}
              <ul
                className="w-full relative h-auto pr-5 flex flex-col items-start gap-1 overflow-y-scroll"
                id="style-3"
              >
                {data.map((category: any) => (
                  <li
                    key={category?.id}
                    className={`text-start w-full text-base font-medium text-secondary py-2 px-2 cursor-pointer ${
                      selectedCategory?.id === category.id
                        ? "bg-[#F5F5F5]"
                        : "bg-white"
                    }`}
                    onMouseEnter={() => setSelectedCategory(category)}
                  >
                    {category?.name}
                  </li>
                ))}
              </ul>

              {/* Right Column: Products */}
              <section className="w-full h-full relative justify-start px-5 flex flex-col items-start gap-5"        id="style-3">
                {selectedProducts.length > 0 && (
                  <>
                    <h2 className="text-base font-medium text-foreground flex items-center gap-3">
                      {selectedCategory?.name}
                      <MdKeyboardArrowRight className="text-[20px] font-medium cursor-pointer" />
                    </h2>

                    <section className="grid grid-cols-2 items-start justify-start 2xl:grid-cols-3 gap-4 relative h-auto overflow-y-auto">
                      {selectedProducts.map(
                        (product, index) =>
                          index <= 11 && (
                            <Megamenucard
                              key={product.id}
                              image={product.image}
                              title={product.name}
                              description={product.description}
                              slug={product.slug}
                            />
                          )
                      )}
                    </section>
                  </>
                )}

                <Link
                  href="/products"
                  className="text-lg font-medium absolute bottom-3 py-3 bg-white z-10 text-secondary text-center w-full cursor-pointer"
                >
                  View All
                </Link>
              </section>
            </section>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default MegaMenu;
