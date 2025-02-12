import React from "react";
import HomeCollectionsCard from "./HomeCollectionsCard";

const HomeCollections = () => {
  return (
    <div className="container pb-20 p-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 sm:gap-x-8 sm:gap-y-10">
      <h2 className="col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-6 text-3xl text-secondary-foreground font-medium">
        Our Categories
      </h2>
      {/* <HomeCollectionsCard />
      <HomeCollectionsCard />
      <HomeCollectionsCard />
      <HomeCollectionsCard />
      <HomeCollectionsCard />
      <HomeCollectionsCard />
      <HomeCollectionsCard />
      <HomeCollectionsCard />
      <HomeCollectionsCard /> */}
    </div>
  );
};

export default HomeCollections;
