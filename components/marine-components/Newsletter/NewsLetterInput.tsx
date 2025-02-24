import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
const NewsLetterInput = () => {
  return (
    <div className="flex rounded-full h-[45px]">
      <Input
        className="h-full w-auto lg:w-[400px] px-5 placeholder:text-white rounded-l-full text-primary-foreground text-base md:text-lg"
        name="newsLetter"
        placeholder="Enter your email"
        type="text"
      />
      <Button
        className="h-full  hover:bg-primary-foreground text-white  hover:text-primary bg-primary text-base md:text-lg rounded-r-full"
        type="submit"
      >
        Subscribe
      </Button>
    </div>
  );
};

export default NewsLetterInput;
