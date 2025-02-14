import React from "react";
import ViewProducts from "./ViewProducts";

function ViewProductSection() {
  return (
    <section className="w-full relative biz__container grid grid-cols-1 lg:grid-cols-2 gap-5  py-5 h-auto">
      <ViewProducts image={"/veiwProduct-image1.png"} />
      <ViewProducts image={"/view-productimage2.png"} />
    </section>
  );
}

export default ViewProductSection;
