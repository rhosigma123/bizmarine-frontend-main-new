import React from "react";
import ReviewCard from "./ReviewCard";
function ReviewSection() {
  return (
    <section className="w-full relative h-auto flex flex-col">
      <h2 className="text-xl  text-primary w-fit relative h-auto border-t py-3 px-5 border-primary bg-white  font-bold">
        Reviews 90
      </h2>

      <section className="w-full relative h-auto flex flex-col border p-7">
        <div className="w-full relative h-auto flex py-5   items-center justify-between">
          <ul className="w-fit relative flex items-center gap-3">
            <li className="text-sm font-medium border border-foreground px-5 py-1 rounded-full  cursor-pointer ">
              All
            </li>

            <select
              name="cars"
              className="w-full relative px-5 py-1 bg-lightgray rounded-full relatrive cursor-pointer hidden md:lg"
            >
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </ul>
          <select
            name="cars"
            className="w-fit relative px-2 md:px-5 py-1 bg-lightgray rounded-full relatrive cursor-pointer"
          >
            <option
              value="volvo"
              className="text-sm font-medium text-secondary "
            >
              Short by :Most relevan
            </option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>
        <ReviewCard />
      </section>
    </section>
  );
}

export default ReviewSection;
