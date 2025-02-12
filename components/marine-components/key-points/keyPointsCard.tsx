import React from "react";

type KeyPointsCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const KeyPointsCard: React.FC<KeyPointsCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="bg-white hover:border-2 hover:border-primary p-5 2xl:p-8 rounded-xl grid border-2 content-start gap-3 2xl:gap-5 w-full ">
      <span className="rounded-full text-3xl w-16 lg:w-20 h-16 lg:h-20 text-white font-medium flex justify-center items-center bg-primary">
        {icon}
      </span>
      <h2 className=" text-xl xl:text-2xl text-secondary-foreground font-bold  leading-7">
        {title}
      </h2>
      <p className=" text-base xl:text-lg font-medium text-secondary-foreground">
        {description}
      </p>
    </div>
  );
};

export default KeyPointsCard;
