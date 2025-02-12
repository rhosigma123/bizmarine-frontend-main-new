"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits" })
    .regex(/^\d+$/, { message: "Phone must contain only numbers" }),
  email: z.string().email({ message: "Invalid email address" }),
});

type FormInputs = z.infer<typeof formSchema>;

const CallToActionForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
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
      className="grid  gap-5 p-5 border bg-white rounded-xl"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        type="text"
        id="name"
        placeholder="Enter Name"
        className={`border-2 rounded-lg px-3 h-12 placeholder:text-[0.95rem] 
      border-gray-200 focus:border-primary outline-none focus:ring-0 `}
        {...register("name")}
      />
      {errors.name && (
        <span className="text-red-500 text-xs pt-1 ">
          {errors.name.message}
        </span>
      )}

      <input
        type="tel"
        id="phone"
        placeholder="Enter Phone"
        className={`border-2 rounded-lg px-3 h-12 placeholder:text-[0.95rem]
      border-gray-200 focus:border-primary outline-none focus:ring-0`}
        {...register("phone")}
      />
      {errors.phone && (
        <span className="text-red-500 text-xs pt-1">
          {errors.phone.message}
        </span>
      )}

      {/* Email Field */}
      <input
        type="email"
        id="email"
        placeholder="Enter Email"
        className={`border-2 rounded-lg px-3 h-12 placeholder:text-[0.95rem] 
      border-gray-200 focus:border-primary outline-none focus:ring-0 `}
        {...register("email")}
      />
      {errors.email && (
        <span className="text-red-500 text-xs pt-1 ">
          {errors.email.message}
        </span>
      )}

      {/* Message Field */}
      <textarea
        id="message"
        placeholder="Message"
        className={`border-2 rounded-lg p-3 placeholder:text-[0.95rem] 
      border-gray-200 focus:border-primary outline-none  
      focus:ring-0 h-[100px] `}
      ></textarea>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-primary text-white p-2 rounded-lg "
      >
        Submit
      </button>
    </form>

  );
};

export default CallToActionForm;
