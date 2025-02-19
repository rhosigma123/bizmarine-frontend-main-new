import React from "react";
import { CiSearch } from "react-icons/ci";
function HelpBanner({
  title,
  image,
  css,
}: {
  title: string;
  image: string;
  css?: string;
}) {
  return (
    <section
      className={`w-full realtive h-[300px] sm:h-[400px] md:h-[500px] flex items-center justify-center   bg-center bg-cover bg-no-repeat `}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="w-full relative items-center justify-center  flex  text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl flex-col gap-6 font-medium text-white h-full bg-black/70 ">
        <h2 className="w-full relative h-auto text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          {title}
        </h2>

        <section className="w-fit relative bg-white rounded-full  gap-2 px-2 h-auto flex items-center border border-primary justify-between overflow-hidden  ">

          <select name="cars" className="w-fit text-base text-primary relative h-full ">
            <option value="categoty" >Category</option>
            <option value="products">Products</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        
          <input type="text" className=" relative h-auo py-3 text-secondary text-base font-medium px-5 placeholder:text-secondary xl:w-[500px] max-w-[500px] bg-transparent   " placeholder="Enter Quetion or Keyword like Example: Payment " />

          <button className="p-2 rounded-full relative h-auto bg-primary  cursor-pointer">
                <CiSearch className="text-[20px] text-white" />
          </button>

        </section>
      </div>
    </section>
  );
}

export default HelpBanner;
