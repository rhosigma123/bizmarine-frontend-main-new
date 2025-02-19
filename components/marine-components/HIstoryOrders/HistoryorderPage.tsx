import React from "react";
import Image from "next/image";
import { BsThreeDots } from "react-icons/bs";
import OrderTabs from "./OrderTabs";
function HistoryorderPage() {
  return (
    <section className=" w-full relative  py-10 md:py-20 h-aull biz__container flex flex-col gap-5 ">
      <div className="  w-fit  lg:w-full relative py-4 border rounded-lg px-5 flex items-start lg:items-center gap-2 justify-between flex-col lg:flex-row ">
        <div className=" w-fit relative h-auto flex  lg:gap-2  items-start lg:items-center flex-col lg:flex-row ">
          <span className="w-full relative h-auto flex-col lg:flex-row flex pr-5 items-start lg:items-center  lg:border-r  gap-2">
            <Image
              src={"/msc.png"}
              alt=""
              height={400}
              width={400}
              className=" h-[100px] lg:h-[60px] w-[100px] lg:w-[60px] rounded-full cursor-pointer object-cover border"
            />

            <p className="text-base font-medium text-secondary ">
              Ayan Mansoor{" "}
            </p>
          </span>

          <p className="w-fit py-2 text-nowrap h-full relative lg:border-r  lg:px-5 text-base font-medium text-secondary ">
            +91 090904390
          </p>

          <p className="w-fit relative text-base lg:px-5 font-medium text-secondary ">
            samaniabdussalam@gmail.com
          </p>
        </div>
        <BsThreeDots className="text-[20px] text-secondary cursor-pointer" />
      </div> 

      <OrderTabs />
    </section>
  );
}

export default HistoryorderPage;
