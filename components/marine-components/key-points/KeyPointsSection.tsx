import { BiLayer } from "react-icons/bi";
import { BsBox2 } from "react-icons/bs";
import { RiShieldCheckLine } from "react-icons/ri";
import { BsUiChecksGrid } from "react-icons/bs";
import React, { useContext } from "react";
import KeyPointsCard from "./keyPointsCard";
import { HomeContext } from "@/app/Context/HomeContext";

const keyPoints = [
  {
    icon: <BsUiChecksGrid />,
    title: "Millions of business offerings",
    description:
      "Explore products and suppliers for your business from millions of offerings worldwide.",
  },
  {
    icon: <RiShieldCheckLine />,
    title: "Assured quality and transactions",
    description:
      "Ensure production quality from verified suppliers, with your orders protected from payment to delivery.",
  },
  {
    icon: <BsBox2 />,
    title: "One-stop trading solution",
    description:
      "Order seamlessly from product/supplier search to order management, payment, and fulfillment.",
  },
  {
    icon: <BiLayer />,
    title: "Tailored trading experience",
    description:
      "Get curated benefits, such as exclusive discounts, enhanced protection, and extra support, to help grow your business every step of the way.",
  },
];

const KeyPointsSection = () => {
  const data = useContext(HomeContext);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 2xl:gap-8 container px-5 py-10 md:py-20">
      <h2 className="col-span-1 md:col-span-2 lg:col-span-4 text-3xl text-secondary-foreground font-medium">
        Key Points
      </h2>
      {keyPoints.map((keyPoint, index) => (
        <KeyPointsCard
          key={index}
          title={keyPoint.title}
          icon={keyPoint.icon}
          description={keyPoint.description}
        />
      ))}
    </div>
  );
};

export default KeyPointsSection;
