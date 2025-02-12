"use client";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState, useContext } from "react";
import { BiCartDownload } from "react-icons/bi";
import NumberOfProducts from "../NumberOfProducts";
import { CartContext } from "@/app/Context/CartContext";

interface Product {
  id: number;
  name: string;
  image: string;
}

interface AddToCartBtnProps {
  className?: string;
  product: Product;
}

const AddToCartBtn: React.FC<AddToCartBtnProps> = ({ className, product }) => {
  const [isInCart, setIsInCart] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const { cartItemCount, addToCart, removeFromCart } = useContext(CartContext); // use context here

  useEffect(() => {
    const existingCart = JSON.parse(localStorage.getItem("cartItems") || "[]");
    const existingProduct = existingCart.find(
      (item: Product) => item.id === product.id
    );
    if (existingProduct) {
      setIsInCart(true);
      setQuantity(existingProduct.quantity);
    } else {
      setIsInCart(false);
      setQuantity(1); // Reset quantity if not in cart
    }
  }, [product.id]);

  const handleAddToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem("cartItems") || "[]");
    const existingProductIndex = existingCart.findIndex(
      (item: Product) => item.id === product.id
    );

    if (existingProductIndex !== -1) {
      // If product exists, increase the quantity
      existingCart[existingProductIndex].quantity += 1;
      setQuantity(existingCart[existingProductIndex].quantity);
      console.log(
        `Increased quantity of ${product.name} to ${existingCart[existingProductIndex].quantity}`
      );
    } else {
      // If product doesn't exist, add it to the cart
      const newProduct = { ...product, quantity: 1 };
      existingCart.push(newProduct);
      setIsInCart(true);
      console.log(`${product.name} added to cart with quantity 1`);
    }

    localStorage.setItem("cartItems", JSON.stringify(existingCart));

    // Use the addToCart function from context
    addToCart({ ...product, quantity: 1 }); // Adjust this as necessary for your data structure
  };

  const handleRemoveFromCart = () => {
    const existingCart = JSON.parse(localStorage.getItem("cartItems") || "[]");
    const updatedCart = existingCart.filter(
      (item: Product) => item.id !== product.id
    );

    // Update local storage
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));

    // Use the removeFromCart function from context
    removeFromCart(product.id);
    setIsInCart(false); // Update UI state
  };

  return (
    <>
      {isInCart ? (
        <NumberOfProducts
          product={product}
          initialQuantity={quantity}
          updateQuantity={setQuantity}
          onRemove={handleRemoveFromCart} // Optional: if you have a remove button in NumberOfProducts
        />
      ) : (
        <Button
          onClick={handleAddToCart}
          className={`${className} self-end hover:bg-green-600 transition-all ease-linear flex items-center justify-center gap-2`}
        >
          <BiCartDownload className="text-xl hidden sm:block" />
          Add to Cart
        </Button>
      )}
    </>
  );
};

export default AddToCartBtn;
