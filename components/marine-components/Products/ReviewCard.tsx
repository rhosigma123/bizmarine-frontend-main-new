import React from "react";
import Image from "next/image";
import { BiLike } from "react-icons/bi";
function ReviewCard() {
  return (
    <section className="w-full relative h-auto flex flex-col p-3 gap-3 items-start  justify-between">
      <div className="w-full relative h-auto flex items-center justify-between">
        <span className="grid grid-cols-[auto_1fr] gap-3 w-fit  items-start justify-center">
          <Image
            src="/google.png"
            alt=""
            height={400}
            width={500}
            className="h-[50px] w-[50px] object-cover"
          />
          <span className="w-fit relative h-auto flex flex-col gap-1">
            <h2 className="text-medium text-foreground ">Ayan mansoor</h2>
            <p className="text-sm text-secondary ">12 Jan 2025</p>
          </span>
        </span>

        <span className="w-fit hidden lg:flex relative px-3 bg-lightgray border rounded-full text-sm font-medium  items-center py-2 gap-2">
        <BiLike className="text-[20px] text-primary"/>
        Helpful (0)    
        </span>

      </div>

      <div className="w-full relative h-auto  flex flex-col gap-1 border-l border-foreground px-3">
        <p className="text-sm font-medium text-secondary ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus architecto dolorum corrupti enim consequatur, sint magni ipsa eius totam vero provident. Non corrupti illo aliquam nulla numquam fugit nesciunt incidunt?
        </p>
      </div>
    </section>
  );
}

export default ReviewCard;
