"use client";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

// Define Zod schema for form validation
const contactFormSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits" })
    .regex(/^\d+$/, { message: "Phone must be a number" }),
  email: z.string().email({ message: "Invalid email address" }),
});

// Infer the types from the Zod schema
type FormInputs = z.infer<typeof contactFormSchema>;

const ContactForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    try {
      
      console.log("Form Data Submitted:", data);
      reset();
      router.push("/thank-you");
    } catch (error) {
      console.error("Form submission failed", error);
    }
  };

  return (
    <form
      className="flex w-full items-start flex-col gap-4 p-5 border rounded-xl" 
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="w-full relative h-auo flex gap-3 flex-col">
        <h2 className=" text-xl md:text-2xl lg:text-3xl font-medium text-primary h-auto py-2 border-b ">Connect with Bizmarine</h2>
        <p className="text-base font-medium text-secondary">Fill out the form and we’ll reach back to you asap</p>
      </div>

      <section  className="grid md:grid-cols-2 gap-5 mt-5  w-full rounded-xl">
      <div className="flex flex-col gap-2">
        <label
          htmlFor="name"
          className="text-md text-primary font-medium flex items-center gap-2 pl-2"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="Enter Name"
          className={`border-2 rounded-lg px-3 h-12 placeholder:text-[0.95rem] 
            border-gray-200 focus:border-primary outline-none  
       focus:ring-0 `}
          {...register("name")}
        />
        {errors.name && (
          <span className="text-red-500 text-xs pt-1">
            {errors.name.message}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="phone"
          className="text-md text-primary font-medium flex items-center gap-2 pl-2"
        >
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          placeholder="Enter Phone"
          className={`border-2 rounded-lg px-3 h-12 placeholder:text-[0.95rem] 
            border-gray-200 focus:border-primary outline-none  
       focus:ring-0 `}
          {...register("phone")}
        />
        {errors.phone && (
          <span className="text-red-500 text-xs pt-1">
            {errors.phone.message}
          </span>
        )}
      </div>

      <div className="md:col-span-2 flex flex-col gap-2">
        <label
          htmlFor="email"
          className="text-md text-primary font-medium flex items-center gap-2 pl-2"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter Email"
          className={`border-2 rounded-lg px-3 h-12 placeholder:text-[0.95rem] 
               border-gray-200 focus:border-primary outline-none  
          focus:ring-0 `}
          {...register("email")}
        />
        {errors.email && (
          <span className="text-red-500 text-xs pt-1">
            {errors.email.message}
          </span>
        )}
      </div>

      {/* Textarea for Message (optional) */}
      <div className="md:col-span-2 flex flex-col gap-2">
        <label
          htmlFor="message"
          className="text-md text-primary font-medium flex items-center gap-2 pl-2"
        >
          Message
        </label>
        <textarea
          id="message"
          className={`border-2 rounded-lg p-3 placeholder:text-[0.95rem] 
            border-gray-200 focus:border-primary outline-none  
       focus:ring-0 
       h-[100px]`}
          placeholder="Message"
        ></textarea>
      </div>

      <Button
        type="submit"
        className="hover:bg-primary hover:opacity-90 md:col-span-2 p-2 rounded-lg"
      >
        Submit
      </Button>
      </section>
    </form>
  );
};

export default ContactForm;
