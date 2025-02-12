"use client";
import React, { useEffect, useState } from "react";
import CareersCard from "./CareersCard";
import { useParams } from "next/navigation";
import axios from "@/config/config";
import { Careers } from "@/types/interface";

const CareersContainer = () => {
  const [data, setData] = useState<Careers[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/careers`);
        console.log("All Careers:", response.data.careers);
        setData(response.data.careers);
      } catch (errors) {
        console.log(errors);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="py-10 container grid gap-8">
      {data.map((career) => (
        <CareersCard key={career.id} data={career} />
      ))}
    </div>
  );
};

export default CareersContainer;
