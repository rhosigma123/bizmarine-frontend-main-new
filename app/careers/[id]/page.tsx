import SingleCareer from "@/components/marine-components/Careers/SingleCareer";
import React from "react";
import CommonBanner from "@/components/marine-components/Common/CommonBanner";
import MarineBreadCrumb from "@/components/marine-components/MarineBreadCrumb";

const CareersDetail = () => {
  return (
    <>  
      <CommonBanner title="Bizmarine Career" image="/Drone-image.png"/>
      <MarineBreadCrumb/>

      <SingleCareer />;
    </>
  );
};

export default CareersDetail;
