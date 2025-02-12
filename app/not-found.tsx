"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

const NotFoud = () => {
  const router = useRouter();
  const handleClick = () => {
    router.back();
  };

  return (
    <div className="w-full h-[calc(100vh-170px)] grid place-content-center text-[100px] font-bold">
      404
      <Button className="hover:bg-primary" onClick={handleClick}>
        Go back
      </Button>
    </div>
  );
};

export default NotFoud;
