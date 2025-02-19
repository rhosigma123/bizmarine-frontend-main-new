"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { HiOutlineDocumentText } from "react-icons/hi2";

function HelpContentSection() {
  return (
    <section className="w-full relative h-auto biz__container  py-20 grid grid-cols-1 lg:grid-cols-[1fr_3fr]  gap-10 md:gap-20 lg:gap-40 items-start justify-between">
      <div className="w-full relative h-auto  hidden lg:flex ">
        <Accordion type="single" collapsible className="w-full relative h-auto">
          <AccordionItem
            value="item-1"
            className="w-full relative h-auto border-b"
          >
            <AccordionTrigger className="text-lg  w-full font-medium text-secondary">
              Title
            </AccordionTrigger>
            <AccordionContent className=" w-full relative h-auto">
              <ul className="w-full relative h-auto flex flex-col gap-2">
                <li className="w-fll relative h-auto flex items-centern gap-2">
                  <HiOutlineDocumentText className="text-[20px] text-secondary" />
                  Ayan mansoor
                </li>
                <li className="w-fll relative h-auto flex items-centern gap-2">
                  <HiOutlineDocumentText className="text-[20px] text-secondary" />
                  Ayan mansoor
                </li>
                <li className="w-fll relative h-auto flex items-centern gap-2">
                  <HiOutlineDocumentText className="text-[20px] text-secondary" />
                  Ayan mansoor
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <section className="w-full relative h-auto flex  flex-col gap-4 ">
        <div className="w-full relative h-auto flex items-center gap-3 text-base font-medium  text-secondary ">
          <p className=" text-base text-secondary">Help Center</p>/
          <p className=" text-base text-secondary">Buyer Knowledge Base</p>/
          <p className=" text-base text-foreground">
            t id ullam temporibus animi nihil
          </p>
        </div>

        <div className="w-full relative h-auto flex flex-col  gap-5">
          <h2 className="text-2xl font-medium text-primary ">About Us</h2>

          <p className="w-full relative  text-base font-medium text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            modi accusantium, soluta voluptatum sit, ipsa, ea perferendis velit
            laboriosam delectus harum? Cupiditate in accusamus consequatur
            maxime nam inventore sint illo?
          </p>
          <Image
            src="/"
            alt=""
            height={500}
            width={500}
            className="w-full relartive h-[250px] lg:h-[300px]"
          />
        </div>
      </section>
    </section>
  );
}

export default HelpContentSection;
