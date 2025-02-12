"use client";
import axios from "@/config/config";
import React, { useEffect, useState } from "react";
import { Certificate } from "@/types/interface";
import CertificateCards from "./CertificateCards";

const CertificatesContainer = () => {
  const [data, setData] = useState<Certificate[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/certificates`);
        console.log(response.data.data.certificates);
        setData(response.data.data.certificates || []);
      } catch (errors) {
        console.log(errors);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 container p-5 md:py-10">
      {data.map((certificate) => (
        <CertificateCards key={certificate.id} data={certificate} />
      ))}
    </div>
  );
};

export default CertificatesContainer;
