"use client";
import { Careers } from "@/types/interface";
import axios from "@/config/config";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { TbLoader2 } from "react-icons/tb";

const SingleCareer = () => {
  const [data, setData] = useState<Careers>();
  const params = useParams<{ id: string }>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/careers/${params.id}`);
        console.log("Brands Data Detailed:", response.data.career);
        setData(response.data.career);
      } catch (errors) {
        console.log(errors);
      }
    };
    fetchData();
  }, [params.id]);

  if (!data) {
    return (
      <h1 className="h-[calc(100vh-150px)] grid place-content-center">
        <TbLoader2 className="text-primary animate-spin text-2xl" />
      </h1>
    );
  }

  return (
    <>
      {data && (
        <div className="py-10 container grid gap-5">
          <h1>{data?.position}</h1>
          <h2>{data?.created_at}</h2>
          <h2>{data?.updated_at}</h2>
          <h2>{data?.description}</h2>
          <h2>{data?.salary}</h2>
          <h2>{data?.detail}</h2>
          <h2>{data?.location}</h2>
          <h2>{data?.opening}</h2>
          <h2>{data?.shift}</h2>
          <h2>{data?.type}</h2>
          <h2>{data?.order}</h2>
        </div>
      )}
    </>
  );
};

export default SingleCareer;
