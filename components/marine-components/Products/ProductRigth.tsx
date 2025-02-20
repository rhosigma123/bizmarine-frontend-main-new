import React, { useContext, useEffect, useState } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import Image from "next/image";
import { BASE_URL } from "@/config/config";
import { CartContext } from "@/app/Context/CartContext";

import { BsCart3 } from "react-icons/bs";

function ProductRigth({ productDetailtype }: any) {
  const { cartItemCount, addToCart, removeFromCart } = useContext(CartContext);
  const [isInCart, setIsInCart] = useState(false);
  const [quantity, setQuantity] = useState(1);
  console.log(productDetailtype);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setQuantity(Number(value));
    console.log("Selected value:", value);
  };

  useEffect(() => {
    const existingCart = JSON.parse(localStorage.getItem("cartItems") || "[]");
    const existingProduct = existingCart.find(
      (item: any) => item.id === productDetailtype.id
    );
    if (existingProduct) {
      setIsInCart(true);
      setQuantity(existingProduct.quantity);
    } else {
      setIsInCart(false);
      setQuantity(1); // Reset quantity if not in cart
    }
  }, [productDetailtype.id]);

  const handleAddToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem("cartItems") || "[]");
    const existingProductIndex = existingCart.findIndex(
      (item: any) => item.id === productDetailtype.id
    );

    if (existingProductIndex !== -1) {
      // If product exists, increase the quantity
      existingCart[existingProductIndex].quantity += 1;
      setQuantity(existingCart[existingProductIndex].quantity);
      console.log(
        `Increased quantity of ${productDetailtype.name} to ${existingCart[existingProductIndex].quantity}`
      );
    } else {
      // If product doesn't exist, add it to the cart
      const newProduct = { ...productDetailtype, quantity: 1 };
      existingCart.push(newProduct);
      setIsInCart(true);
    }

    localStorage.setItem("cartItems", JSON.stringify(existingCart));

    // Use the addToCart function from context
    addToCart({ ...productDetailtype, quantity: 1 }); // Adjust this as necessary for your data structure
  };

  const handleRemoveFromCart = () => {
    const existingCart = JSON.parse(localStorage.getItem("cartItems") || "[]");
    const updatedCart = existingCart.filter(
      (item: any) => item.id !== productDetailtype.id
    );

    // Update local storage
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));

    // Use the removeFromCart function from context
    removeFromCart(productDetailtype.id);
    setIsInCart(false); // Update UI state
  };

  return (
    <section className="w-full reltive h-auto flex flex-col items-start gap-5 ">
      <div className="w-full realtive h-auto flex flex-col gap-5 p-4 md:p-7 rounded-xl bg-white">
        {/* 
        <p className="text-base font-medium text-secondary">
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
          ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
          egestas semper. Aenean ultricies mi vitae est. Mauris placerat
          eleifend leo.
        </p>
        <p className="text-base font-medium text-secondary">
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
          ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
          egestas semper. Aenean ultricies mi vitae est. Mauris placerat
          eleifend leo.
        </p> */}

        <div
          className="w-full relative h-auto line-clamp-[20]"
          dangerouslySetInnerHTML={{ __html: productDetailtype.content }}
        />

        <div className="w-full  relaive h-auo flex items-center justify-start gap-5">
          <h2 className="text-meidum  text-primary text-4xl">
            $ {productDetailtype.price}
          </h2>
          <span className="w-fit relative flex items-center gap-3 text-xl font-medium ">
            <AiOutlineCheckCircle className="text-[25px] text-primary" />
            In Stock
          </span>
        </div>

        <div className="w-full relative  h-auto flex items-center gap-3">
          <select
            name="cars"
            onChange={handleChange}
            value={quantity}
            className="px-3 mr-3  block  border  relative text-secondary py-1 "
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          <div className="w-full gap-1 2xl:gap-3 relative h-auto flex 2xl:flex-row flex-col items-center justify-center">
            <button
              className={`w-full relative flex justify-center items-center gap-2 h-auto text-center text-white bg-primary   py-2 px-4 rounded-xl    `}
              onClick={handleAddToCart}
            >
              {isInCart && <BsCart3 className="text-[22px] text-white" />}
              Add to Cart
            </button>
            {isInCart && (
              <button
                className={` relative flex justify-center 2xl:w-fit w-full items-center gap-2 h-auto text-center text-white bg-red-600 py-2 px-4 rounded-xl    `}
                onClick={handleRemoveFromCart}
              >
                Remove
              </button>
            )}
          </div>
        </div>

        <div className="w-full relative h-auto flex items-center justify-center  flex-col  2xl:flex-row ">
          <p className="w-full relative h-auto text-foreground bg-lightgray py-3 text-center xl:px-10 rounded-md cursor-pointer">
            Book a Repair Service
          </p>
          <p className="w-full flex items-center gap-3 relative h-auto  py-2 text-center xl:px-10  rounded-md cursor-pointer">
            <CiHeart className="text-[35px] text-primary" />
            Book a Repair Service
          </p>
        </div>
      </div>

      <div className="w-full reltive bg-white rounded-xl p-4 md:p-7 grid grid-cols-2 md:grid-cols-3 gap-5">
        <div className="w-full relative   flex flex-col gap-1 items-center justify-center">
          <CiHeart className=" text-[40px] md:text-[50px] text-primary " />
          <h2 className=" text-sm md:text-base  font-medium text-foreground uppercase">
            1-4 DAYS <br /> DELIVERY
          </h2>
        </div>
        <div className="w-full relative flex flex-col gap-1 items-center justify-center">
          <CiHeart className="text-[40px] md:text-[50px]  text-primary " />
          <h2 className=" text-sm md:text-base  text-center font-medium text-foreground uppercase">
            100% ORIGINAL <br /> QUALITY
          </h2>
        </div>
        <div className="w-full relative flex flex-col gap-1 items-center justify-center">
          <CiHeart className="text-[40px] md:text-[50px]  text-primary " />
          <h2 className=" text-sm md:text-base font-medium text-foreground uppercase">
            EXTENDED <br /> WARRANTY
          </h2>
        </div>
      </div>

      <div className="w-full relative h-auto flex gap-5  bg-white items-cente p-4 md:p-7  rounded-xl  justify-start">
        <p className="text-lg font-medium text-foreground ">Share (123) :</p>

        <FaFacebookF className="text-gray-400 text-[30px] " />
        <FaTwitter className="text-gray-400 text-[30px] " />
        <FaGoogle className="text-gray-400 text-[30px] " />
        <FaPinterest className="text-gray-400 text-[30px] " />
      </div>
      <div className="w-full relative h-auto flex gap-5  bg-white items-cente p-4 md:p-7  rounded-xl  justify-start">
        <Image
          src={`${BASE_URL}${productDetailtype.brand?.image}`}
          alt={productDetailtype.brand?.name}
          height={400}
          width={500}
          className={
            "h-[50px] w-[50px] relative rounded-full object-cover border"
          }
        />
        <span className="flex items-start  flex-col gap-0">
          <h2 className="text-base font-semibold text-primary ">
            {productDetailtype.brand?.name}
          </h2>
          <p className="text-sm text-secondary text-normal ">
            {productDetailtype.brand?.description}
          </p>
        </span>
      </div>
    </section>
  );
}

export default ProductRigth;
