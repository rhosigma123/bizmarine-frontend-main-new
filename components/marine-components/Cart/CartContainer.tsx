"use client";
import React, { useState, useEffect, useContext } from "react";
import RequestQuote from "../RequestQuote";
import CartCard from "./CartCard";
import Link from "next/link";
import { CartContext } from "@/app/Context/CartContext";

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
    <div className="container grid gap-3 pb-8">
      <h2 className="py-5 text-2xl font-medium">My Cart</h2>
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <CartCard onDelete={handleDelete} key={item.id} item={item} />
        ))
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
  );
};

export default CartContainer;
