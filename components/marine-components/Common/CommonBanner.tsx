import React from "react";



function CommonBanner({title,image ,css}:{title:string,image:string ,css?:string}) {
  return (
    <section className={`w-full realtive h-[300px] sm:h-[400px] md:h-[500px] flex items-center justify-center   bg-center bg-cover bg-no-repeat `
    }
    style={{ backgroundImage: `url(${image})` }}
    >
      <h1 className="w-full relative items-center justify-center  flex  text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white h-full bg-black/70 ">
        {title}
      </h1>
    </section>
  );
}

export default CommonBanner;
