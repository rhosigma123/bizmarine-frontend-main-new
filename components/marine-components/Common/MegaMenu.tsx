import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { RiArrowDownSLine } from "react-icons/ri";
import Megamenucard from "./Megamenucard";

interface Categories {
  [key: string]: {
    [subcategory: string]: string[];
  };
}

const categories: Categories = {
  Adapter: {
    "Power Adapters": ["Product 1", "Product 2", "Product 3"],
    "Signal Converters": ["Signal Converter 1", "Signal Converter 2"],
    "USB Adapters": ["USB Adapter 1", "USB Adapter 2"],
  },
  Amplifier: {
    "Audio Amplifier": ["Audio Amplifier 1", "Audio Amplifier 2"],
    "Signal Booster": ["Signal Booster 1"],
    "Pre-Amplifiers": ["Pre-Amplifier 1", "Pre-Amplifier 2"],
  },
  "Health & Personal Care": {
    "Hair Dryer": ["Hair Dryer 1", "Hair Dryer 2"],
    "Electric Toothbrush": ["Electric Toothbrush 1"],
    Shaver: ["Shaver 1", "Shaver 2"],
  },
};

function MegaMenu({ children }: { children: React.ReactNode }) {
  const [selectedCategory, setSelectedCategory] = useState("Adapter");
  const [selectedSubcategory, setSelectedSubcategory] =
    useState("Power Adapters");
  return (
    <NavigationMenu className="relative w-full">
      <NavigationMenuList className="relative w-full">
        <NavigationMenuItem>
          <NavigationMenuTrigger className="w-full z-[1] relative h-auto hover:bg-transparent bg-transparent flex items-center justify-between">
            {children}
          </NavigationMenuTrigger>

          <NavigationMenuContent className="w-screen relative bg-white h-[70vh]">
            <section className="w-full biz__container bg-white gap-2 h-full grid grid-cols-[1fr_1fr_3fr] py-5">
              {/* Left Column: Categories */}
              <ul
                className="w-full relative h-auto pr-5 flex flex-col items-start gap-1 overflow-y-scroll "
                id="style-3"
              >
                {Object.keys(categories).map((category) => (
                  <li
                    key={category}
                    className={`text-start w-full text-base font-medium text-secondary py-2 px-2 cursor-pointer ${
                      selectedCategory === category
                        ? "bg-[#F5F5F5]"
                        : "bg-white"
                    }`}
                    onMouseEnter={() => {
                      setSelectedCategory(category);
                      setSelectedSubcategory(
                        Object.keys(categories[category])[0]
                      );
                    }}
                  >
                    {category}
                  </li>
                ))}
              </ul>

              <ul
                className="w-full relative h-auto pr-5 flex flex-col items-start gap-1 overflow-y-scroll "
                id="style-3"
              >
                {Object.keys(categories[selectedCategory]).map(
                  (subcategory) => (
                    <li
                      key={subcategory}
                      className={`text-start w-full text-base font-medium text-secondary py-2 px-2 cursor-pointer ${
                        selectedSubcategory === subcategory
                          ? "bg-[#F5F5F5]"
                          : "bg-white"
                      }`}
                      onMouseEnter={() => setSelectedSubcategory(subcategory)}
                    >
                      {subcategory}
                    </li>
                  )
                )}
              </ul>

              <section className="w-full relative justify-between px-5 flex flex-col items-start gap-5">
                <h2 className="text-base font-medium text-foreground flex items-center gap-3">
                  {selectedSubcategory}
                  <MdKeyboardArrowRight className="text-[20px] font-medium cursor-pointer" />
                </h2>
                <section className="grid grid-cols-2 items-start justify-start 2xl:grid-cols-3 gap-4 relative h-auto">
                  {categories[selectedCategory][selectedSubcategory].map(
                    (product, index) => (
                      <Megamenucard
                        image={"/product-image.png"}
                        title={product}
                        key={index}
                      />
                    )
                  )}
                </section>

                <Link
                  href="/products"
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
