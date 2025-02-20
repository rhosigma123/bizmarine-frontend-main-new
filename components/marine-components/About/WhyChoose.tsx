import React from "react";
import WhyChooseCard from "./WhyChooseCard";

function WhyChoose() {
  return (
    <section className="w-full relative h-auto pb-10 flex flex-col items-center justify-center biz__container gap-10  ">
      <h2 className=" text-xl md:text-2xl lg:text-4xl font-medium text-primary ">
        Why Choose Bizmarine?
      </h2>

      <div className="w-full relative h-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 gap-4">
        <WhyChooseCard
          title="Unmatched Quality & Reliability"
          description="Sourced from top manufacturers, ensuring durability and performance."
          bg="bg-[#F9DFDC]"
        />
        <WhyChooseCard
          title="Extensive Product Range"
          description="From control systems to communication devices, we cover all automation needs."
          bg="bg-[#F9DFDC]"
        />
        <WhyChooseCard
          title="Global Reach & Service"
          description="Delivering solutions worldwide with seamless logistics and support."
          bg="bg-[#F9DFDC]"
        />

        <WhyChooseCard
          title="Unmatched Quality & Reliability"
          description="Sourced from top manufacturers, ensuring durability and performance."
          bg="bg-[#F9DFDC]"
        />
        <WhyChooseCard
          title="Extensive Product Range"
          description="From control systems to communication devices, we cover all automation needs."
          bg="bg-[#F9DFDC]"
        />
        <WhyChooseCard
          title="Global Reach & Service"
          description="Delivering solutions worldwide with seamless logistics and support."
          bg="bg-[#F9DFDC]"
        />
      </div>
    </section>
  );
}

export default WhyChoose;
