import { CareersProps } from "@/types/interface";
import Link from "next/link";
import React from "react";

const CareersCard: React.FC<CareersProps> = ({ data }) => {
  return (
    <div className="p-3 bg-white border rounded-xl">
      <h2 className="text-2xl font-semibold p-3 text-primary">
        {data.position}
      </h2>
      <hr />
      <div className="p-3 flex justify-between items-center">
        <span className="grid gap-1">
          Job Type:
          <strong>{data.type}</strong>
        </span>
        <span className="grid gap-1">
          Location:
          <strong>{data.location}</strong>
        </span>
        <Link
          className="bg-primary text-white px-4 py-2 rounded-md"
          href={`/careers/${data.slug}`}
        >
          Apply
        </Link>
      </div>
    </div>
  );
};

export default CareersCard;
