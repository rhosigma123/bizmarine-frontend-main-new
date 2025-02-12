import { BASE_URL } from "@/config/config";
import { Clients, ClientsProps } from "@/types/interface";
import Image from "next/image";
import React from "react";

const ClientsCard: React.FC<ClientsProps> = ({ data }) => {
  return (
    <div className="grid gap-5 border rounded-md p-3 justify-items-center">
      <Image
        src={`${BASE_URL}${data.logo || ""}`}
        width={300}
        height={300}
        alt={data.alt_logo}
        className="w-full object-contain h-[100px]"
      />
      <h3 className="bg-secondary p-2 rounded-md text-xl text-primary font-semibold text-center">
        {data.name}
      </h3>
    </div>
  );
};

export default ClientsCard;
