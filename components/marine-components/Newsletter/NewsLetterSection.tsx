import React from "react";
import NewsLetterInput from "./NewsLetterInput";

const NewsLetterSection = () => {
  return (
    <div className="bg-primary w-full p-5 md:p-10  ">
      <div className="  flex justify-start md:justify-between px-0 items-center gap-5 flex-wrap">
        <div className="grid gap-0 md:gap-2">
          <h2 className="text-3xl md:text-3xl text-white font-semibold">
            miss any updates from us,
          </h2>
          <span className="text-lg text-white font-normal">
            Subscribe to our newsLetter
          </span>
        </div>
        <NewsLetterInput />
      </div>
    </div>
  );
};

export default NewsLetterSection;
