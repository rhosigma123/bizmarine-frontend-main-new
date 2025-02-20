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

  useEffect(() => {
    const fetchData = async () => {
      if (!selectedCategory || !selectedCategory.slug) {
        // console.log("ayan mansoor",selectedCategory?.slug)
      }
      try {
        const response = await apiClient.get(
          `/product/${selectedCategory?.slug}`
        );
        if (response?.data?.products) {
          setSelectedProducts(response.data.products); // Assuming API returns an array
        } else {
          setSelectedProducts([]); // Clear products if no data
        }
      } catch (error) {
        console.error("Error fetching product data:", error);
        setSelectedProducts([]);
      }
    };
    fetchData();
  }, [selectedCategory]);

  if (!data || data.length === 0) {
    return (
      <div className="py-4 px-3 text-primary font-medium">
        No categories available
      </div>
    );
  }

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
              <section className="w-full relative justify-between px-5 flex flex-col items-start gap-5">
                {selectedProducts.length > 0 && (
                  <>
                    <h2 className="text-base font-medium text-foreground flex items-center gap-3">
                      {selectedCategory?.name}
                      <MdKeyboardArrowRight className="text-[20px] font-medium cursor-pointer" />
                    </h2>

                    <section className="grid grid-cols-2 items-start justify-start 2xl:grid-cols-3 gap-4 relative h-auto">
                      {selectedProducts.map((product) => (
                        <Megamenucard
                          key={product.id}
                          image={product.image}
                          title={product.name}
                          description={product.description}
                          slug={product.slug}
                        />
                      ))}
                    </section>
                  </>
                )}

                <Link
                  href="/categories"
                  className="text-lg font-medium text-secondary text-center w-full cursor-pointer"
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
