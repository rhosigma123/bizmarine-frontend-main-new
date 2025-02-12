import React from "react";
import Image from "next/image";

const IndustrialAutomationCard = () => {
  return (
    <div className="grid grid-cols-6">
      <h2 className="col-span-6 text-3xl text-secondary-foreground font-medium">
        Top Industrial And Marine Automation Categories
      </h2>
      <div className="">
        <Image src="/hero.jpg" alt="" height={200} width={200} />
        <h2 className="text-[20px] font-normal ">Control Unit</h2>
        <p className="text-[16px] font-light ">500 Product</p>
      </div>
    </div>
  );
};

export default IndustrialAutomationCard;
