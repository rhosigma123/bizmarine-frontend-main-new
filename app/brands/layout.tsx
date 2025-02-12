import MarineBreadCrumb from "@/components/marine-components/MarineBreadCrumb";
import React from "react";

const BrandsLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <MarineBreadCrumb />
      {children}
    </div>
  );
};

export default BrandsLayout;
