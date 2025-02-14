import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
function MarineShopbanner() {
  return (
    <section className="w-full relative h-auto biz__container pb-10 ">
      <section className="w-full relative h-auto flex items-center  rounded-xl   bg-no-repeat bg-cover object-right justify-center bg-[url(/vewproduct-image3.png)]">
        <div className="w-full relative min-h-[300px] px-10 grid rounded-xl grid-cols-1 sm:grid-cols-[2fr_auto] md:grid-cols-2 bg-gradient-to-r from-black from-50%  to-transparent items-center justify-between ">
          <span className="flex flex-col  items-start justify-start gap-2">
            <h2 className="  text-3xl md:text-4xl lg:text-4xl 2xl:text-5xl font-semibold uppercase text-white">
              MARINE VESSELS SENSORS
            </h2>
            <p className="text-medium text-base text-white ">
              Pressure Sensors, Temperature Sensors, Flow Transmitters, Level
              Sensors, Humidity Sensors.
            </p>
          </span>

          <span className="w-full relative flex items-center justify-start h-fit    sm:justify-end  lg:h-full ">
            {" "}
            <Button className="w-fit hover:text-white text-base font-medium  border border-transparent hover:border-white  transition-all duration-300 justify-between h-fit flex items-center text-secondary rounded-full px-5 py-2 bg-[#FFD900] ">
              SHOP NOW
            </Button>
          </span>
        </div>
      </section>
    </section>
  );
}

export default MarineShopbanner;
