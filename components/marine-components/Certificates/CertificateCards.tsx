import React from "react";
import Image from "next/image";
import { CertificateProps } from "@/types/interface";

const CertificateCards: React.FC<CertificateProps> = ({ data }) => {
  return (
    <div className="p-5 bg-secondary grid gap-5 border-4 border-primary">
      <Image
        src={`${BASE_URL}${data.image || ""}`}
        alt={data.alt_tag}
        width={400}
        height={500}
      />
      <h3 className="bg-white p-2 rounded-md text-xl text-primary font-semibold text-center">
        {data.name}
      </h3>
    </div>
  );
};

export default CertificateCards;
