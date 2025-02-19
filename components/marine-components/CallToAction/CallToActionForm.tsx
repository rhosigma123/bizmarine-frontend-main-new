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
    // <form
    //   className="grid  gap-5 p-5 border bg-white rounded-xl"
    //   onSubmit={handleSubmit(onSubmit)}
    // >
    //   <input
    //     type="text"
    //     id="name"
    //     placeholder="Enter Name"
    //     className={`border-2 rounded-lg px-3 h-12 placeholder:text-[0.95rem]
    //   border-gray-200 focus:border-primary outline-none focus:ring-0 `}
    //     {...register("name")}
    //   />
    //   {errors.name && (
    //     <span className="text-red-500 text-xs pt-1 ">
    //       {errors.name.message}
    //     </span>
    //   )}

    //   <input
    //     type="tel"
    //     id="phone"
    //     placeholder="Enter Phone"
    //     className={`border-2 rounded-lg px-3 h-12 placeholder:text-[0.95rem]
    //   border-gray-200 focus:border-primary outline-none focus:ring-0`}
    //     {...register("phone")}
    //   />
    //   {errors.phone && (
    //     <span className="text-red-500 text-xs pt-1">
    //       {errors.phone.message}
    //     </span>
    //   )}

    //   {/* Email Field */}
    //   <input
    //     type="email"
    //     id="email"
    //     placeholder="Enter Email"
    //     className={`border-2 rounded-lg px-3 h-12 placeholder:text-[0.95rem]
    //   border-gray-200 focus:border-primary outline-none focus:ring-0 `}
    //     {...register("email")}
    //   />
    //   {errors.email && (
    //     <span className="text-red-500 text-xs pt-1 ">
    //       {errors.email.message}
    //     </span>
    //   )}

    //   {/* Message Field */}
    //   <textarea
    //     id="message"
    //     placeholder="Message"
    //     className={`border-2 rounded-lg p-3 placeholder:text-[0.95rem]
    //   border-gray-200 focus:border-primary outline-none
    //   focus:ring-0 h-[100px] `}
    //   ></textarea>

    //   {/* Submit Button */}
    //   <button
    //     type="submit"
    //     className="w-full bg-primary text-white p-2 rounded-lg "
    //   >
    //     Submit
    //   </button>
    // </form>

    <form
      action=""
      className="w-full relative bg-white h-auto flex flex-col  p-7 lg:p-5 xl:p-10 rounded-lg"
    >
      <h2 className="text-4xl font-medium text-primary ">Contact Bizmarine</h2>
      <p className="text-base font-medium text-secondary ">
        Leave your message and we&apos;ll get back to you shortly
      </p>

      <section className="w-full mt-6 reltive h-auto grid grid-cols-2 gap-3 lg:gap-3 xl:gap-5">
        <div className="w-full reltive h-auto flex flex-col gap-1 col-start-1 md:col-end-2 col-end-3">
          <label htmlFor="" className="text-base font-medium text-forground  ">
            Name *
          </label>
          <input
            type="text"
            className="w-full relative h-auto flex px-2 py-2 rounded-lg border"
            placeholder="Enter Your Name "
          />
        </div>
        <div className="w-full reltive h-auto flex flex-col gap-1 col-start-1 md:col-start-2 col-end-3 ">
          <label htmlFor="" className="text-base font-medium text-forground  ">
            Email *
          </label>
          <input
            type="text"
            className="w-full relative h-auto flex px-2 py-2 rounded-lg border"
            placeholder="Enter Your Email"
          />
        </div>

        <div className="w-full reltive h-auto flex flex-col gap-1 col-start-1 md:col-end-2 col-end-3">
          <label htmlFor="" className="text-base font-medium text-forground  ">
            Country *
          </label>
          <input
            type="text"
            className="w-full relative h-auto flex px-2 py-2 rounded-lg border"
            placeholder="Enter Your Country"
          />
        </div>

        <div className="w-full reltive h-auto flex flex-col gap-1 col-start-1 md:col-start-2 col-end-3">
          <label htmlFor="" className="text-base font-medium text-forground  ">
            Phone *
          </label>
          <input
            type="text"
            className="w-full relative h-auto flex px-2 py-2 rounded-lg border"
            placeholder="Enter Your Phone Number"
          />
        </div>

        <div className="w-full reltive h-auto flex flex-col gap-1 col-start-1 col-end-3">
          <label htmlFor="" className="text-base font-medium text-forground  ">
            Message
          </label>
          <textarea
            name=""
            rows={4}
            className="w-full p-4 relative h-auto rounded-lg border "
            placeholder="Describe Your Requirments"
            id=""
          ></textarea>
        </div>
      </section>
      <button className="  mt-6 w-fit relative h-auto  px-6 py-2 items-center text-white text-base bg-primary hover:text-primary hover:bg-transparent rounded-full border border-transparent hover:border-primary">
        Submit
      </button>
    </form>
  );
};

export default CallToActionForm;
