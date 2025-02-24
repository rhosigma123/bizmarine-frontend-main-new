import { BASE_URL } from "@/config/config";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = (props: any) => {
  const imageUrl = props.logo ? `${BASE_URL}${props.logo}` : "/bizz-marine.png";

  return (
    <Link href={"/"}>
      <Image
        className=" min-w-[100px] sm:min-w-[200px] md:w-[210px] max-h-[50px] h-full object-contain"
        src={imageUrl}
        width={200}
        height={200}
        alt={props.companyName || "Bizmarine"}
        loading="eager"
      />
    </Link>
  );
};

export default Logo;
