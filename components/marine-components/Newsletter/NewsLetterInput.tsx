import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
const NewsLetterInput = () => {
  return (
    <div className="flex rounded-full h-[45px]">
      <Input
        className="h-full px-5 placeholder:text-white rounded-l-full text-primary-foreground text-lg"
        name="newsLetter"
        placeholder="Enter your email"
        type="text"
      />
      <Button
        className="h-full bg-primary-foreground hover:bg-primary-foreground text-primary text-lg rounded-r-full"
        type="submit"
      >
        Subscribe
      </Button>
    </div>
  );
};

export default NewsLetterInput;
