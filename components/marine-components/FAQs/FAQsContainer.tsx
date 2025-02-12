"use client";
import axios from "@/config/config";
import React, { useEffect, useState } from "react";
import { Clients } from "@/types/interface";
import FAQsCard from "./FAQsCard";

const FAQsContainer = () => {
  const [data, setData] = useState<Clients[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/faqs`);
        console.log("FAQ", response.data);

        setData(response.data.faqs);
      } catch (errors) {
        console.log(errors);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="p-5 md:py-10 container grid gap-5">
      <FAQsCard data={undefined} />
    </div>
  );
};

export default FAQsContainer;
