"use client";
import React, { useEffect, useState } from "react";
import GoolgeReviewsCard from "../GoogleReviews/GoolgeReviewsCard";
import axios from "@/config/config";
import { Testimonials } from "@/types/interface";

const TestimonialsContainer = () => {
  const [data, setData] = useState<Testimonials[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/testimonials`);
        setData(response.data.data.testimonials);
      } catch (errors) {
        console.log(errors);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5 md:py-10">
      {data.map((testimonial) => (
        <GoolgeReviewsCard key={testimonial.id} data={testimonial} />
      ))}
    </div>
  );
};

export default TestimonialsContainer;
