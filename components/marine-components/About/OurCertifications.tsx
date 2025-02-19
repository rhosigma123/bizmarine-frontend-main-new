"use client";
import React from "react";
import Image from "next/image";

function OurCertifications() {
  return (
    <section className="w-full biz__container relative h-auto flex flex-col gap-10 py-10 md:py-20">
      <h2 className=" text-xl md:text-2xl lg:text-4xl text-center font-medium text-primary ">
            Certifications
      </h2>

      <div className="w-full h-auto justify-between items-center  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 ">
        <div className="w-full relative h-full flex flex-col items-center justify-center gap-5">
          <p className="text-p22 font-meidum text-webaccent">ISO Certificate</p>
          <Image
            src={"/ISOCertificets.png"}
            alt="ISO Certificate"
            height={1000}
            width={1000}
            className="w-full relative  md:max-h-auto h-auto object-contain md:object-cover"
          />
        </div>
        <div className="w-full relative h-full flex flex-col items-center justify-center gap-5">
          <p className="text-p22 font-meidum text-webaccent">
            MSME Certificate
          </p>
          <Image
            src={"/MSMECertificate.png"}
            alt="MSME Certificate"
            height={1000}
            width={1000}
            className="w-full relative  md:max-h-auto h-auto object-contain md:object-cover"
          />
        </div>
        <div className="w-full relative h-full flex flex-col items-center justify-center gap-5">
          <p className="text-p22 font-meidum text-webaccent">IEC Certificate</p>
          <Image
            src={"/IECCertificate.png"}
            alt="IEC Certificate"
            height={1000}
            width={1000}
            className="w-full relative  md:max-h-auto h-auto object-contain md:object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default OurCertifications;
