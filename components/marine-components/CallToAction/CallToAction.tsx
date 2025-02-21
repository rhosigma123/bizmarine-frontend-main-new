"use  client";
import CallToActionForm from "./CallToActionForm";
import GoogleReviewsSlider from "../GoogleReviews/GoogleReviewsSlider";
import React, { useContext } from "react";
import { RootContext } from "@/app/Context/RootContext";

const CallToAction = () => {
  // const data = useContext(RootContext);
  // const rootdata=useContext(RootContext)
  return (
    <section className="bg-primary">
      <div className="container p-5 py-10 lg:p-10 flex flex-col-reverse  xl:grid xl:grid-cols-[1.5fr_1fr] gap-5">
        <div className=" content-center flex gap-5 items-center justify-between flex-col w-full">
          <h2 className="  text-2xl  lg:text-3xl  text-white flex items-center gap-4 font-normal ">
            {" "}
            5 Stars<p className="font-semibold uppercase ">COUNTLESS Smiles</p>
          </h2>
          <GoogleReviewsSlider />
          <p className=" text-sm md:text-base font-medium text-white italic">
            Bizmarine proudly holds a 5-star Google rating from 50+ reviews.
          </p>
        </div>
        <CallToActionForm />
      </div>
    </section>
  );
};

export default CallToAction;
