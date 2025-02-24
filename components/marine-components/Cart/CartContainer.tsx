"use client";
import React, { useState, useEffect, useContext } from "react";
import RequestQuote from "../RequestQuote";
import CartCard from "./CartCard";
import Link from "next/link";
import { CartContext } from "@/app/Context/CartContext";
import useProductData from "@/components/CustomHooks/ProductHook";
import ContentLoader from "react-content-loader";
import ProductGridCard from "../Products/ProductGridCard";
import NewProductGridCard from "../Products/NewProductGridCard";

import { CartItem } from "@/types/interface";

const CartContainer = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const { cartItemCount, removeFromCart } = useContext(CartContext);
  const [loading, setLoading] = useState<boolean>(true); // Add a loading flag

  const { loading: productloading, data } = useProductData();

  const fetchCartItems = () => {
    try {
      const cartItemsStr = localStorage.getItem("cartItems");
      if (cartItemsStr) {
        const storedCartItems: CartItem[] = JSON.parse(cartItemsStr);
        if (Array.isArray(storedCartItems)) {
          // Filter to ensure unique items (by id) are added
          const uniqueItems = storedCartItems.reduce(
            (acc: CartItem[], item) => {
              const existingItem = acc.find((i) => i.id === item.id);
              if (existingItem) {
                existingItem.quantity += item.quantity; // Update quantity if exists
              } else {
                acc.push(item);
              }
              return acc;
            },
            []
          );

          setCartItems(uniqueItems);
        } else {
          console.error("Stored cart data is not an array.");
        }
      } else {
        console.warn("No cart items found in localStorage.");
      }
    } catch (error) {
      console.error(
        "Error fetching or parsing cart items from localStorage:",
        error
      );
    } finally {
      setLoading(false);
    }
  };

  const calculateTotalPrice = (): number => {
    return cartItems.reduce((total, item) => {
      return total + parseFloat(item.price) * item.quantity;
    }, 0);
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  const handleDelete = (id: number) => {
    removeFromCart(id);
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  if (loading) {
    return (
      <section className="w-full relative h-auto biz__container">
        <ContentLoader viewBox="0 0 1360 900" height={"100%"} width={"100%"}>
          <rect x="30" y="20" rx="8" ry="8" width="200" height="200" />
          <rect x="30" y="250" rx="0" ry="0" width="200" height="18" />
          <rect x="30" y="275" rx="0" ry="0" width="120" height="20" />
          <rect x="250" y="20" rx="8" ry="8" width="200" height="200" />
          <rect x="250" y="250" rx="0" ry="0" width="200" height="18" />
          <rect x="250" y="275" rx="0" ry="0" width="120" height="20" />
          <rect x="470" y="20" rx="8" ry="8" width="200" height="200" />
          <rect x="470" y="250" rx="0" ry="0" width="200" height="18" />
          <rect x="470" y="275" rx="0" ry="0" width="120" height="20" />
          <rect x="690" y="20" rx="8" ry="8" width="200" height="200" />
          <rect x="690" y="250" rx="0" ry="0" width="200" height="18" />
          <rect x="690" y="275" rx="0" ry="0" width="120" height="20" />
          <rect x="910" y="20" rx="8" ry="8" width="200" height="200" />
          <rect x="910" y="250" rx="0" ry="0" width="200" height="18" />
          <rect x="910" y="275" rx="0" ry="0" width="120" height="20" />
          <rect x="1130" y="20" rx="8" ry="8" width="200" height="200" />
          <rect x="1130" y="250" rx="0" ry="0" width="200" height="18" />
          <rect x="1130" y="275" rx="0" ry="0" width="120" height="20" />
          <rect x="30" y="340" rx="8" ry="8" width="200" height="200" />
          <rect x="30" y="570" rx="0" ry="0" width="200" height="18" />
          <rect x="30" y="595" rx="0" ry="0" width="120" height="20" />
          <rect x="250" y="340" rx="8" ry="8" width="200" height="200" />
          <rect x="250" y="570" rx="0" ry="0" width="200" height="18" />
          <rect x="250" y="595" rx="0" ry="0" width="120" height="20" />
          <rect x="470" y="340" rx="8" ry="8" width="200" height="200" />
          <rect x="470" y="570" rx="0" ry="0" width="200" height="18" />
          <rect x="470" y="595" rx="0" ry="0" width="120" height="20" />
          <rect x="690" y="340" rx="8" ry="8" width="200" height="200" />
          <rect x="690" y="570" rx="0" ry="0" width="200" height="18" />
          <rect x="690" y="595" rx="0" ry="0" width="120" height="20" />
          <rect x="910" y="340" rx="8" ry="8" width="200" height="200" />
          <rect x="910" y="570" rx="0" ry="0" width="200" height="18" />
          <rect x="910" y="595" rx="0" ry="0" width="120" height="20" />
          <rect x="1130" y="340" rx="8" ry="8" width="200" height="200" />
          <rect x="1130" y="570" rx="0" ry="0" width="200" height="18" />
          <rect x="1130" y="595" rx="0" ry="0" width="120" height="20" />
        </ContentLoader>
      </section>
    );
  }

  return (
    <>
      <div className="biz__container grid gap-3 pb-8">
        <h2 className="py-5 text-2xl font-medium">My Cart</h2>

        <ul className="w-full relative h-auto hidden sm:grid grid-cols-[3fr_1fr_1fr] md:grid-cols-[3.1fr_1fr_1fr_1fr] py-5 mb-2 border-b  justify-between items-center gap-1">
          <li className="w-fit relative text-secondary  h-auto text-base font-medium ">
            Products
          </li>
          <li className="w-fit relative  text-secondary h-auto text-base font-medium ">
            Price
          </li>
          <li className="w-fit relative text-secondary  h-auto text-base font-medium ">
            Quantity
          </li>
          <li className=" hidden lg:block w-fit relative  text-secondary h-auto text-base font-medium ">
            Total
          </li>
        </ul>

        {cartItems.length > 0 ? (
          <>
            <section className="w-full relative h-auto gap-3 sm:gap-4 md:gap-2 grid grid-cols-2 sm:grid-cols-1">
              {cartItems.map((item) => (
                <CartCard onDelete={handleDelete} key={item.id} item={item} />
              ))}
            </section>

            <section className="w-full relative h-auto flex-col gap-3 border-b px-5  mt-10 ">
              <div className="w-full relative h-auto border-b py-1 flex items-center justify-between gap-5 ">
                <div className=" hidden sm:flex items-center gap-4">
                  <span className="text-base font-medium text-secondary cursor-pointer">
                    Clear Cart
                  </span>
                  <Link
                    className="text-base font-medium text-secondary cursor-pointer p-2 bg-lightgray "
                    href={"/products"}
                  >
                    Continue Shopping
                  </Link>
                </div>
                <div className="flex items-center  justify-end gap-1">
                  <span className="text-xl font-medium text-secondary cursor-pointer">
                    Cart Total :
                  </span>
                  <Link
                    className="text-2xl  font-semibold text-primary cursor-pointer p-2  "
                    href={"/products"}
                  >
                    $ {calculateTotalPrice() || 0}
                  </Link>
                </div>
              </div>
            </section>
          </>
        ) : (
          <>
            <section className="w-full relative h-auto gap-5 flex items-center flex-col ">
              <h1 className="text-6xl font-medium text-primary text-center">
                Your cart is empty !
              </h1>
              <Link
                href={"/products"}
                className=" text-foreground cursor-pointer  text-medium text-lg bg-primary text-white rounded-lg px-10 py-2 font-medium "
              >
                Shop Now
              </Link>
            </section>
          </>
        )}
        {cartItems.length > 0 && <RequestQuote />}
      </div>

      {data.length <= 0 ? (
        <ContentLoader viewBox="0 0 1360 900" height={"100%"} width={"100%"}>
          <rect x="30" y="20" rx="8" ry="8" width="200" height="200" />
          <rect x="30" y="250" rx="0" ry="0" width="200" height="18" />
          <rect x="30" y="275" rx="0" ry="0" width="120" height="20" />
          <rect x="250" y="20" rx="8" ry="8" width="200" height="200" />
          <rect x="250" y="250" rx="0" ry="0" width="200" height="18" />
          <rect x="250" y="275" rx="0" ry="0" width="120" height="20" />
          <rect x="470" y="20" rx="8" ry="8" width="200" height="200" />
          <rect x="470" y="250" rx="0" ry="0" width="200" height="18" />
          <rect x="470" y="275" rx="0" ry="0" width="120" height="20" />
          <rect x="690" y="20" rx="8" ry="8" width="200" height="200" />
          <rect x="690" y="250" rx="0" ry="0" width="200" height="18" />
        </ContentLoader>
      ) : (
        <>
          <section className="w-full biz__container relative h-auto flex flex-col items-start gap-5 md:gap-10 py-10 md:py-20">
            <span className="w-full relative h-auto border-b py-3 flex items-center justify-between ">
              <h2 className=" text-base md:text-xl lg:text-3xl font-medium text-primary uppercase flex items-center gap-4 ">
                YOU may also like
              </h2>
            </span>

            <section className="w-full relative h-auto grid  grid-cols-2 md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-5 ">
              {data.map(
                (item, index) =>
                  index <= 4 && (
                    <NewProductGridCard data={item} key={index} wishlist={false} />
                  )
              )}
            </section>

            <Link href={"/products"} className="w-fit relative h-auto flex items-center justify-cwenter bg-primary text-white px-7 rounded-lg mx-auto  py-2">View More</Link>
          </section>
        </>
      )}
    </>
  );
};

export default CartContainer;
