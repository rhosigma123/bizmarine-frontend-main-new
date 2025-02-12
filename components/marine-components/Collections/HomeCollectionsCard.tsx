import { BASE_URL } from "@/config/config";
import { CategoryProps } from "@/types/interface";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomeCollectionsCard: React.FC<CategoryProps> = ({ data }) => {
  return (
    <Link
      href={`/collection/${data.slug}`}
      className="grid justify-items-center gap-3"
    >
      <Image
        src={`${BASE_URL}${data.image || ""}`}
        alt={data.alt_tag}
        width={150}
        height={150}
        loading="lazy"
        className="rounded-full border-2 object-contain w-[120px] h-[120px] sm:w-[150px] sm:h-[150px]"
      />
      <h3 className="text-xl font-semibold text-primary text-center">
        {data.name}
      </h3>
    </Link>
  );
};

export default HomeCollectionsCard;
