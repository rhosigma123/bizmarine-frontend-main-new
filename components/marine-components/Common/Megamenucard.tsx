import React from "react";
import Image from "next/image";


type MegaMenuCardtype={
    image:string,
    title:string,
}

function Megamenucard({image,title}:MegaMenuCardtype) {
  return (
    <section className=" w-[150px]   relative h-[200px]  flex flex-col gap-1 bg-lightgray p-4 rounded-md">
      <Image
        src={image}
        alt={title}
        height={300}
        width={300}
        className="   h-full w-full relative rounded-lg  cursor-pointer"
      />
      <h2 className=" text-sm  font-medium text-secondary  text-center">
        Croma Type A & Type C 4-Port Charger 
      </h2>
    </section>
  );
}

export default Megamenucard;
