"use client";
import React, { createContext, useState, ReactNode, useEffect } from "react";

interface CartContextType {
  cartItemCount: number;
  addToCart: (item: any) => void; // Adjust type as needed
  removeFromCart: (id: number) => void; // ID type
}

export const CartContext = createContext<CartContextType>({
  cartItemCount: 0,
  addToCart: () => {},
  removeFromCart: () => {},
});

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cartItemCount, setCartItemCount] = useState(0);

  // Function to fetch and update cart item count from localStorage
  const updateCartCount = () => {
    const cartItemsStr = localStorage.getItem("cartItems");
    if (cartItemsStr) {
      const storedCartItems = JSON.parse(cartItemsStr);
      if (Array.isArray(storedCartItems)) {
        setCartItemCount(storedCartItems.length);
      }
    }
  };

  // Fetch the cart item count from localStorage when the app loads
  useEffect(() => {
    updateCartCount();

    // Synchronize cart count on storage changes
    const handleStorageChange = () => {
      updateCartCount();
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  // Function to add item to the cart
  // Function to add item to the cart
  const addToCart = (item: any) => {
    const cartItemsStr = localStorage.getItem("cartItems");
    const cartItems = cartItemsStr ? JSON.parse(cartItemsStr) : [];

    // Check if the item already exists in the cart
    const existingItemIndex = cartItems.findIndex(
      (cartItem: any) => cartItem.id === item.id
    );

    if (existingItemIndex >= 0) {
      // If the item exists, increment its quantity
      cartItems[existingItemIndex].quantity += item.quantity; // Update quantity based on the added item's quantity
    } else {
      // If the item does not exist, add it to the cart
      cartItems.push({ ...item, quantity: item.quantity || 1 }); // Ensure quantity is at least 1
    }

    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    setCartItemCount(cartItems.length); // Update cart count
  };

  // Function to remove item from the cart
  const removeFromCart = (id: number) => {
    const cartItemsStr = localStorage.getItem("cartItems");
    if (cartItemsStr) {
      const cartItems = JSON.parse(cartItemsStr);
      const updatedCart = cartItems.filter((item: any) => item.id !== id);
      localStorage.setItem("cartItems", JSON.stringify(updatedCart));
      setCartItemCount(updatedCart.length); // Update cart count
    }
  };

  return (
    <CartContext.Provider value={{ cartItemCount, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
