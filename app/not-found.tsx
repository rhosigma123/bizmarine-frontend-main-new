"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";

const NotFoud = () => {
  const router = useRouter();
  const handleClick = () => {
    router.back();
  };

  return (
    // <div className="w-full h-[calc(100vh-170px)] grid place-content-center text-[100px] font-bold">
    //   404
    //   <Button className="hover:bg-primary" onClick={handleClick}>
    //     Go back
    //   </Button>
    // </div>

    <section className="w-full relative h-[80vh] biz__container gap-5 flex flex-col items-center justify-center ">
      <p className="text-lg text-center font-meidum text-secondary">
        {" "}
        Oops! It looks like you&apos;ve taken a wrong turn. Don&apos;t worry, we&apos;ll help
        <br />
        you find your way back to the right page. Let&apos;s get you back on track!
      </p>

      <Link href={"/"} className="w-fit relative h-auto flex items-center justify-center bg-primary px-5 py-2 text-white rounded-full">
        Back To Home
      </Link>
    </section>
  );
};

export default NotFoud;
