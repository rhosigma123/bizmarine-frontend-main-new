import React, { useEffect, useState } from "react";
import ClientsSlider from "./ClientsSlider";
import { Clients } from "@/types/interface";
import axios from "@/config/config";

const ClientSliderContainer = () => {
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
    <div className="py-10 bg-white">
      <ClientsSlider data={data} />
    </div>
  );
};

export default ClientSliderContainer;
