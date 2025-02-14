"use client";
import React, { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const RangeSliderFilter: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    initializeRangeSliderFilter();
  }, []);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="h-fit border-b pb-2"
    >
      <CollapsibleTrigger asChild className="mb-1 cursor-pointer">
        <div className="flex items-center justify-between">
          <h3 className="my-2 text-secondary-foreground font-medium text-lg">
            Price Range
          </h3>
          <FaChevronDown
            className={`${
              isOpen ? "" : "-rotate-90"
            }  text-foreground/60 transition-all duration-200`}
          />
        </div>
      </CollapsibleTrigger>
      
      <CollapsibleContent className="grid">
        <div className="range-slider">
          <Input
            className="border-none shadow-none p-0 hot"
            defaultValue={25000}
            min="0"
            max="120000"
            step="500"
            type="range"
          />
          <Input
            className="border-none shadow-none p-0 hot"
            defaultValue={50000}
            min="0"
            max="120000"
            step="500"
            type="range"
          />
          <span className="flex text-left gap-3">
            <div>
              <Label className="text-sm text-foreground">Min</Label>
              <Input
                className="text-sm  "
                type="number"
                defaultValue={25000}
                min="0"
                max="120000"
              />
            </div>
            <div>
              <Label className="text-sm text-foreground">Max</Label>
              <Input
                className="text-sm "
                type="number"
                defaultValue={50000}
                min="0"
                max="120000"
              />
            </div>
          </span>
        </div>
        <Button variant={"outline"} className="hover:text-primary border border-transparent hover:border-primary hover:bg-transparent  bg-primary text-white ">Apply</Button>
      </CollapsibleContent>

   
      
    </Collapsible>
    
  );
};

const initializeRangeSliderFilter = () => {
  const parent = document.querySelector(".range-slider");
  if (!parent) return;

  const rangeS = parent.querySelectorAll<HTMLInputElement>("input[type=range]");
  const numberS =
    parent.querySelectorAll<HTMLInputElement>("input[type=number]");

  rangeS.forEach((el) => {
    el.oninput = function () {
      let slide1 = parseFloat(rangeS[0].value);
      let slide2 = parseFloat(rangeS[1].value);

      if (slide1 > slide2) {
        [slide1, slide2] = [slide2, slide1];
      }

      numberS[0].value = slide1.toString();
      numberS[1].value = slide2.toString();
    };
  });

  numberS.forEach((el) => {
    el.oninput = function () {
      const number1 = parseFloat(numberS[0].value);
      const number2 = parseFloat(numberS[1].value);

      if (number1 > number2) {
        numberS[0].value = number2.toString();
        numberS[1].value = number1.toString();
      }

      rangeS[0].value = number1.toString();
      rangeS[1].value = number2.toString();
    };
  });
};

export default RangeSliderFilter;
