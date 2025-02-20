"use client";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { isEmail, isMobilePhone } from "validator";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { CartItem } from "@/types/interface";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import apiClient from "@/config/config";

// * +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++(Zod Validation Start)+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const formSchema = z.object({
  name: z.string().min(5, "Enter Full Name"),
  email: z
    .string()
    .email("Invalid email address")
    .min(5, "Email is too short")
    .refine(isEmail, { message: "Invalid Email Address" }),
  phone: z
    .string()
    .min(8, "Phone Number is too short")
    .max(14, "Phone Number is too long")
    .refine(isMobilePhone, { message: "Invalid Phone Number" }),
  location: z.string().min(5, "Add proper Location."),
  companyName: z.string().min(3, "Enter Proper Company Name "),
  companyPhone: z
    .string()
    .min(8, "Phone Number is too short")
    .max(14, "Phone Number is too long")
    .refine(isMobilePhone, { message: "Invalid Phone Number" }),
  companyEmail: z
    .string()
    .email("Invalid email address")
    .min(5, "Email is too short")
    .max(50, "Email is too long")
    .refine(isEmail, { message: "Invalid Email Address" }),
  companyAddress: z.string().min(5, "Company Address is too short."),
  products: z.array(z.number()).optional(),
});

type FormInputs = z.infer<typeof formSchema>;
// * +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++(Zod Validation End)+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const RequestQuote = () => {
  const router = useRouter();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isValid },
  } = useForm<FormInputs>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
  });
  const url = usePathname();
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleNext = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, 3));
  };

  function getAllcartdata() {
    const cartItemsStr = localStorage.getItem("cartItems");
    const productsIds = [];
    if (cartItemsStr) {
      const storedCartItems: CartItem[] = JSON.parse(cartItemsStr);
      if (Array.isArray(storedCartItems)) {
        for (let item of storedCartItems) {
          productsIds.push(item.id);
        }
        return productsIds;
      }
    }
  }

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {

    if (!executeRecaptcha) {
      alert("ReCAPTCHA not loaded");
      return;
    }

    try {

      const token = await executeRecaptcha();
      const productIds = getAllcartdata();

      data.products = productIds;
      console.log("Form Data Submitted:", data);
      const response = await apiClient.post(`/order`, {
        ...data,
        token,
        // url,
      });
      console.log(response.data, "yatsgksdfjgl");
      reset();
      setIsSubmitted(true);
      router.push("/thank-you");
      handleDialogClose();
    } catch (error) {
      console.error("Form submission failed", error);
    }
  };

  const handleDialogClose = () => {
    if (isValid) {
      setIsOpen(false);
    } else {
      console.log(
        "Form has errors. Please fix them before closing the dialog."
      );
    }
  };

  const [currentStep, setCurrentStep] = React.useState(1);

  const handlePrevious = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
  };
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="w-fit justify-self-end text-white text-base rounded-full hover:bg-primary hover:opacity-90 transition-opacity ease-linear px-5 py-2">
          Request Quote
        </Button>
      </DialogTrigger>
      <DialogContent className="rounded-4xl">
        <form
          onSubmit={handleSubmit(onSubmit)}
          encType="multipart/form-data"
          className="grid gap-5 max-w-[600px]"
        >
          <div className="flex relative items-center justify-between gap-5 w-full">
            <hr
              className={`h-[3px] absolute ${
                currentStep > 1
                  ? "bg-primary text-white"
                  : "bg-secondary text-primary"
              } w-1/2 -z-10`}
            />
            <hr
              className={`h-[3px] absolute right-0 ${
                currentStep > 2
                  ? "bg-primary text-white"
                  : "bg-secondary text-primary"
              } w-1/2 -z-10`}
            />
            <span
              className={`rounded-full ${
                currentStep >= 1
                  ? "bg-primary text-white"
                  : "bg-secondary text-primary"
              } flex items-center justify-center text-xl h-16 w-16`}
            >
              01
            </span>
            <span
              className={`rounded-full ${
                currentStep >= 2
                  ? "bg-primary text-white"
                  : "bg-white border border-primary text-primary "
              } flex items-center justify-center text-xl h-16 w-16`}
            >
              02
            </span>
            <span
              className={`rounded-full ${
                currentStep >= 3
                  ? "bg-primary text-white"
                  : "bg-white border border-primary text-primary "
              } flex items-center justify-center text-xl h-16 w-16`}
            >
              03
            </span>
          </div>

          {currentStep === 1 && (
            <div className="grid gap-5 p-5 border rounded-xl items-end">
              <div className="flex flex-col gap-1">
                <input
                  type="text"
                  id="name"
                  placeholder="Enter Name"
                  className={`border-2 rounded-lg px-3 h-12 placeholder:text-[0.95rem] border-gray-200 focus:border-primary outline-none focus:ring-0`}
                  {...register("name")}
                />
                {errors.name && (
                  <span className="text-red-500 text-xs pt-1">
                    {errors.name.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-1">
                <input
                  type="tel"
                  id="phone"
                  placeholder="Enter Phone"
                  className={`border-2 rounded-lg px-3 h-12 placeholder:text-[0.95rem] border-gray-200 focus:border-primary outline-none focus:ring-0`}
                  {...register("phone")}
                />
                {errors.phone && (
                  <span className="text-red-500 text-xs pt-1">
                    {errors.phone.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-1">
                <input
                  type="email"
                  id="email"
                  placeholder="Enter Email"
                  className={`border-2 rounded-lg px-3 h-12 placeholder:text-[0.95rem] border-gray-200 focus:border-primary outline-none focus:ring-0`}
                  {...register("email")}
                />
                {errors.email && (
                  <span className="text-red-500 text-xs pt-1">
                    {errors.email.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-1">
                <input
                  type="text"
                  id="location"
                  placeholder="Enter Location"
                  className={`border-2 rounded-lg px-3 h-12 placeholder:text-[0.95rem] border-gray-200 focus:border-primary outline-none focus:ring-0`}
                  {...register("location")}
                />
                {errors.location && (
                  <span className="text-red-500 text-xs pt-1">
                    {errors.location.message}
                  </span>
                )}
              </div>

              <Button
                type="button"
                onClick={() => handleNext()}
                className="justify-self-end hover:bg-primary hover:opacity-90 transition-opacity ease-linear rounded-full"
              >
                Next
                <AiOutlineArrowRight className="ml-2" />
              </Button>
            </div>
          )}

          {currentStep === 2 && (
            <div className="grid gap-5 p-5 border rounded-xl items-end">
              <div className="flex flex-col gap-1">
                <input
                  type="text"
                  id="companyName"
                  placeholder="Enter Company Name"
                  className={`border-2 rounded-lg px-3 h-12 placeholder:text-[0.95rem] border-gray-200 focus:border-primary outline-none focus:ring-0`}
                  {...register("companyName")}
                />
                {errors.companyName && (
                  <span className="text-red-500 text-xs pt-1">
                    {errors.companyName.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-1">
                <input
                  type="tel"
                  id="companyPhone"
                  placeholder="Enter Company Phone"
                  className={`border-2 rounded-lg px-3 h-12 placeholder:text-[0.95rem] border-gray-200 focus:border-primary outline-none focus:ring-0`}
                  {...register("companyPhone")}
                />
                {errors.companyPhone && (
                  <span className="text-red-500 text-xs pt-1">
                    {errors.companyPhone.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-1">
                <input
                  type="email"
                  id="companyEmail"
                  placeholder="Enter Company Email"
                  className={`border-2 rounded-lg px-3 h-12 placeholder:text-[0.95rem] border-gray-200 focus:border-primary outline-none focus:ring-0`}
                  {...register("companyEmail")}
                />
                {errors.companyEmail && (
                  <span className="text-red-500 text-xs pt-1">
                    {errors.companyEmail.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-1">
                <input
                  type="text"
                  id="companyAddress"
                  placeholder="Enter Company Address"
                  className={`border-2 rounded-lg px-3 h-12 placeholder:text-[0.95rem] border-gray-200 focus:border-primary outline-none focus:ring-0`}
                  {...register("companyAddress")}
                />
                {errors.companyAddress && (
                  <span className="text-red-500 text-xs pt-1">
                    {errors.companyAddress.message}
                  </span>
                )}
              </div>

              <div className="flex justify-between">
                <Button
                  type="button"
                  onClick={() => handlePrevious()}
                  className="justify-self-end hover:bg-primary hover:opacity-90 transition-opacity ease-linear rounded-full"
                >
                  <AiOutlineArrowLeft className="mr-2" />
                  Previous
                </Button>
                <Button
                  type="button"
                  onClick={() => handleNext()}
                  className="justify-self-end hover:bg-primary hover:opacity-90 transition-opacity ease-linear rounded-full"
                >
                  Next
                  <AiOutlineArrowRight className="ml-2" />
                </Button>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="p-5 flex flex-col gap-5 border rounded-xl">
              <p className="text-xl font-bold text-primary">
                Confirm Your Details
              </p>
              <div className="flex items-center  gap-5">
                <strong className="text-base font-semibold text-secondary">
                  Name:
                </strong>
                <p className="text-primary font-semibold">
                  {watch("name") || ""}
                </p>
              </div>
              <div className="flex items-center  gap-5">
                <strong className="text-base font-semibold text-secondary">
                  {" "}
                  Phone:
                </strong>
                <p className="text-primary font-semibold">
                  {watch("phone") || ""}
                </p>
              </div>
              <div className="flex items-center  gap-5">
                <strong className="text-base font-semibold text-secondary">
                  Email:
                </strong>
                <p className="text-primary font-semibold">
                  {watch("email") || ""}
                </p>
              </div>
              <div className="flex items-center  gap-5">
                <strong className="text-base font-semibold text-secondary">
                  Location:
                </strong>
                <p className="text-primary font-semibold">
                  {watch("location") || ""}
                </p>
              </div>
              <div className="flex items-center  gap-5">
                <strong className="text-base font-semibold text-secondary">
                  Company Name:
                </strong>
                <p className="text-primary font-semibold">
                  {watch("companyName") || ""}
                </p>
              </div>
              <div className="flex items-center  gap-5">
                <strong className="text-base font-semibold text-secondary">
                  Company Phone:
                </strong>
                <p className="text-primary font-semibold">
                  {watch("companyPhone")}
                </p>
              </div>
              <div className="flex items-center  gap-5">
                <strong className="text-base font-semibold text-secondary">
                  Company Email:
                </strong>
                <p className="text-primary font-semibold">
                  {watch("companyEmail") || ""}
                </p>
              </div>
              <div className="flex items-center  gap-5">
                <strong className="text-base font-semibold text-secondary">
                  Company Address:
                </strong>
                <p className="text-primary font-semibold">
                  {watch("companyAddress") || ""}
                </p>
              </div>
              <div className="flex justify-between">
                <Button
                  type="button"
                  onClick={() => handlePrevious()}
                  className="justify-self-end hover:bg-primary hover:opacity-90 transition-opacity ease-linear rounded-full"
                >
                  <AiOutlineArrowLeft className="mr-2" />
                  Previous
                </Button>
                <Button
                  onClick={handleDialogClose}
                  type="submit"
                  className="justify-self-end hover:bg-primary hover:opacity-90 transition-opacity ease-linear rounded-full"
                >
                  Submit
                </Button>
              </div>
            </div>
          )}
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default RequestQuote;
