import React from "react";
import GoogleReviewsSlider from "./GoogleReviewsSlider";
import GoogleReviewStars from "./GoogleReviewStars";
import Image from "next/image";

const GoogleReviewsSection = () => {
  return (
    <section className="bg-secondary py-10 md:py-20">
      <div className="grid grid-cols-1 gap-5 px-5 lg:grid-cols-5 container">
        {/* <h2 className=" lg:col-span-5 font-medium text-lg md:text-3xl text-secondary-foreground mb-5">
          Customer Tales Beyond the Checkout
        </h2> */}
        <div className="grid gap-3 place-content-center place-items-center">
          <h2 className="font-bold text-[#4e8bf0] text-center text-xl">
            Excellent
          </h2>
          <GoogleReviewStars />
          <p className="text-[#4e8bf0] text-xl font-bold">
            Based on 261 Review
          </p>
          <Image
            className="object-contain "
            src={"/google-full.webp"}
            width={120}
            height={120}
            alt="Ayaan Shaikh - profile"
            loading="lazy"
          />
        </div>
        <div className="col-start-1 col-end-2 lg:col-start-2 lg:col-end-6">
          <GoogleReviewsSlider />
        </div>
      </div>
    </section>
  );
};

export default GoogleReviewsSection;
