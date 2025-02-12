import React from "react";
import CallToActionForm from "./CallToActionForm";

const CallToAction = () => {
  return (
    <section className="bg-secondary">
      <div className="container p-5 py-10 lg:p-10 grid lg:grid-cols-2 gap-5">
        <div className="grid content-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl text-primary opacity-65 font-bold">
            Do you have any custom requirement?
          </h2>
          <p className="text-secondary-foreground/50 font-medium text-base md:text-lg lg:text-xl xl:text-2xl">
            we can get it for you, Request Quote...!
          </p>
        </div>
        <CallToActionForm />
      </div>
    </section>
  );
};

export default CallToAction;
