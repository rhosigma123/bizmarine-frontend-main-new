import React from "react";
import CallToActionForm from "./CallToActionForm";
import GoogleReviewsSlider from "../GoogleReviews/GoogleReviewsSlider";

const CallToAction = () => {
  return (
    <section className="bg-secondary">
      <div className="container p-5 py-10 lg:p-10 grid lg:grid-cols-2 gap-5">
        <div className="grid content-center">
          <GoogleReviewsSlider />
        </div>
        <CallToActionForm />
      </div>
    </section>
  );
};

export default CallToAction;
