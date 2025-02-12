import MarineBreadCrumb from "@/components/marine-components/MarineBreadCrumb";
import React, { ReactNode } from "react";

const CareersLayout = ({
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

export default CareersLayout;
