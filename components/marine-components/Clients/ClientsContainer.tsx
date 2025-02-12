"use client";
import axios from "@/config/config";
import React, { useEffect, useState } from "react";
import ClientsCard from "./ClientsCard";
import { Clients } from "@/types/interface";

const ClientsContainer = () => {
  const [data, setData] = useState<Clients[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/clients`);
        setData(response.data.clients);
      } catch (errors) {
        console.log(errors);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 container p-5 md:py-10">
      {data.map((client) => (
        <ClientsCard key={client.id} data={client} />
      ))}
    </div>
  );
};

export default ClientsContainer;
