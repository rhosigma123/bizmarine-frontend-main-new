"use client";
import React, { useState, useEffect, useContext } from "react";
import RequestQuote from "../RequestQuote";
import CartCard from "./CartCard";
import Link from "next/link";
import { CartContext } from "@/app/Context/CartContext";
import { BsThreeDots } from "react-icons/bs";
import ProductGridCard from "../Products/ProductGridCard";

interface CartItem {
  name: string;
  image: string;
  quantity: number;
  id: number;
  description: string;
}

const CartContainer = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const { cartItemCount, removeFromCart } = useContext(CartContext);
  const [loading, setLoading] = useState<boolean>(true); // Add a loading flag

  // Fetch items from localStorage and update state
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
      setLoading(false); // Set loading to false once the data is fetched
    }
  };

  // Update state when component mounts and when items change
  useEffect(() => {
    fetchCartItems();
  }, []);

  const handleDelete = (id: number) => {
    removeFromCart(id); // Use the context to remove the item
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  if (loading) {
    return <div className="container py-10">Loading cart items...</div>;
  }

  return (
    <>
      <div className="container grid gap-3 pb-8">
        <h2 className="py-5 text-2xl font-medium">My Cart</h2>

        <ul className="w-full relative h-auto grid grid-cols-[3fr_1fr_1fr] lg:grid-cols-[3fr_1fr_1fr_1fr] py-5 mb-2 border-b  justify-between items-center gap-1">
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
            <section className="w-full relative h-auto grid grid-cols-2 md:grid-cols-1">
              {cartItems.map((item) => (
                <CartCard onDelete={handleDelete} key={item.id} item={item} />
              ))}
            </section>
            {/* total section */}

            <section className="w-full relative h-auto flex-col gap-3 border-b px-5  mt-10 ">
              <div className="w-full relative h-auto border-b py-1 flex items-center justify-between gap-5 ">
                <div className="flex items-center gap-4">
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
                <div className="flex items-center gap-1">
                  <span className="text-xl font-medium text-secondary cursor-pointer">
                    Cart Total :
                  </span>
                  <Link
                    className="text-2xl  font-semibold text-primary cursor-pointer p-2  "
                    href={"/products"}
                  >
                    $118,000
                  </Link>
                </div>
              </div>
            </section>
          </>
        ) : (
          <>
            <p className="text-center">Your cart is empty.</p>
            <Link
              className="text-primary text-xl text-center underline font-bold py-5"
              href={"/products"}
            >
              Hurry..! Add Products
            </Link>
          </>
        )}
        {cartItems.length > 0 && <RequestQuote />}
      </div>
      <section className="w-full biz__container relative h-auto flex flex-col items-start gap-10 md:gap-20 py-10 md:py-20">
        <span className="w-full relative h-auto border-b py-3 flex items-center justify-between ">
          <h2 className="text-3xl font-medium text-primary uppercase flex items-center gap-4 ">
            YOU may also like
          </h2>
        </span>

        <section className="w-full relative h-auto grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-5 ">
          <ProductGridCard data={[]} />
          <ProductGridCard data={[]} />
          <ProductGridCard data={[]} />
        </section>
      </section>
    </>
  );
};

export default CartContainer;
