import { FAQ, FAQProps } from "@/types/interface";
import React from "react";

const FAQsCard: React.FC<FAQProps> = ({ data }) => {
  return (
    <div className="p-3 border rounded-xl bg-secondary/40">
      <h3 className="text-xl text-primary font-bold">Question</h3>
      <hr className="my-2" />
      <span className="text-secondary-foreground text-base leading-1">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
        praesentium sequi eaque culpa. Deserunt, pariatur adipisci recusandae
        inventore placeat, eaque officiis suscipit reprehenderit provident
        quidem odit ab commodi, quae facilis?
      </span>
    </div>
  );
};

export default FAQsCard;
