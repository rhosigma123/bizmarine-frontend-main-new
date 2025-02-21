"use Client";
import React, { useContext } from "react";
import ViewProducts from "./ViewProducts";
import HeroSection from "../HeroSection";
import { HomeContext } from "@/app/Context/HomeContext";

function ViewProductSection() {
  const data = useContext(HomeContext);

  return (
    <section className="w-full relative h-auto biz__container grid grid-cols-1 md:grid-cols-2 gap-3">
      {/* First item (Full width) */}
      { data?.carousals.length && data?.carousals?.length > 0 && (
        <span className="w-full relative md:col-span-2">
          <HeroSection
            title={data?.carousals[0].title||""}
            subtitle={data?.carousals[0].sub_title||""}
            image={data?.carousals[0].image||""}
            btntitle={data?.carousals[0].button_text || ""}
            btnurl={data?.carousals[0].button_url|| ""}
            css="ayan"
          />
        </span>
      )}

      {/* Remaining items in a two-column grid */}
      {data?.carousals.slice(1).map((item, index) => (
        <span key={index} className="w-full relative h-auto md:col-span-1" >
          <ViewProducts image={item.image} title={item.title} subtitle={item.sub_title} btntitle={item.sub_title} btnurl={item.button_url} />
        </span>
      ))}
    </section>
  );
}

export default ViewProductSection;
