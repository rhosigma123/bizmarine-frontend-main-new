import MarineBreadCrumb from "@/components/marine-components/MarineBreadCrumb";
import React from "react";

const CollectionLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <MarineBreadCrumb />
      {children}
    </>
  );
};

export default CollectionLayout;
