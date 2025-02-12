import MarineBreadCrumb from "@/components/marine-components/MarineBreadCrumb";
import React, { ReactNode } from "react";

const ProductsLayout = ({
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

export default ProductsLayout;
