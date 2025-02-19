"use client";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

type rangevalue = { from: number; to: number };

type rangeFilter = {
  rangeState: rangevalue;
  setrange: React.Dispatch<React.SetStateAction<rangevalue>>;
};

const RangeSliderFilter: React.FC<rangeFilter> = ({ rangeState, setrange }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleRangeChange = (index: number, value: number) => {
    const newRange = { ...rangeState };
    if (index === 0) newRange.from = value;
    else newRange.to = value;

    // Ensure that 'from' is always less than or equal to 'to'
    if (newRange.from > newRange.to) {
      [newRange.from, newRange.to] = [newRange.to, newRange.from];
    }

    setrange(newRange);
  };

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
          {/* Range Inputs */}
          <Input
            className="border-none shadow-none p-0 hot"
            value={rangeState.from}
            min="0"
            max="120000"
            step="500"
            type="range"
            onChange={(e) => handleRangeChange(0, parseInt(e.target.value))}
          />
          <Input
            className="border-none shadow-none p-0 hot"
            value={rangeState.to}
            min="0"
            max="1200"
            step="500"
            type="range"
            onChange={(e) => handleRangeChange(1, parseInt(e.target.value))}
          />

          {/* Number Inputs */}
          <span className="flex text-left gap-3">
            <div>
              <Label className="text-sm text-foreground">Min</Label>
              <Input
                className="text-sm"
                type="number"
                value={rangeState.from}
                min="0"
                max="1200"
                onChange={(e) => handleRangeChange(0, parseInt(e.target.value))}
              />
            </div>
            <div>
              <Label className="text-sm text-foreground">Max</Label>
              <Input
                className="text-sm"
                type="number"
                value={rangeState.to}
                min="0"
                max="120000"
                onChange={(e) => handleRangeChange(1, parseInt(e.target.value))}
              />
            </div>
          </span>
        </div>
        <Button
          variant={"outline"}
          className="hover:text-primary border border-transparent hover:border-primary hover:bg-transparent bg-primary text-white"
        >
          Apply
        </Button>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default RangeSliderFilter;
