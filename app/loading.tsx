import React from "react";
import Image from "next/image";
const loading = () => {
  return (
    <>
      <section className="w-full relative h-[90vh]  flex items-center  bg-white justify-center ">
          <Image src={"/bizz-marine.svg"} alt="BizMarine" height={200} width={300} className=" w-[200px] md:w-[300px] h-auto relative object-contain animate-pulse "/>
      </section>
    </>
  )
};

export default loading;
