"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import CartBtn from "./CartBtn";
import RequestQuote from "../RequestQuote";
import CartCard from "./CartCard";

interface CartItem {
  name: string;
  image: string;
  quantity: number;
  id: number;
  description: string;
}

const CartMenu: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const fetchCartItems = () => {
    try {
      const cartItemsStr = localStorage.getItem("cartItems");
      const storedCartItems = JSON.parse(cartItemsStr || "[]");
      if (Array.isArray(storedCartItems)) {
        setCartItems(storedCartItems);
      } else {
        console.error("Stored data is not an array.");
        setCartItems([]);
      }
    } catch (error) {
      console.error("Error parsing local storage data:", error);
      setCartItems([]);
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  const handleDelete = (id: number) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          title="Cart"
          className="shadow-none h-full flex gap-2 text-xl items-end bg-transparent hover:bg-transparent text-secondary-foreground w-fit justify-self-end"
          onClick={fetchCartItems}
        >
          <CartBtn />
          <span className="hidden md:block text-lg">Cart</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col gap-3 overflow-y-scroll pb-0">
        <h2>My Cart</h2>
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <CartCard onDelete={handleDelete} key={index} item={item} />
          ))
        ) : (
          <p className="text-center">Your cart is empty.</p>
        )}
        <div className="bg-white sticky bottom-0 p-4 text-center">
          <RequestQuote />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CartMenu;
