"use client";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState, useContext } from "react";
import { BiCartDownload } from "react-icons/bi";
import NumberOfProducts from "../NumberOfProducts";
import { CartContext } from "@/app/Context/CartContext";
import { CiHeart } from "react-icons/ci";
import { useWishlist } from "@/app/Context/WishlistContext";
import { IoHeartDislikeOutline } from "react-icons/io5";
import { Products } from "@/types/interface";
// interface Product {
//   id: number;
//   name: string;
//   image: string;
//   slug?:string,
//   price?:string
// }

interface AddToCartBtnProps {
  className?: string;
  product: Products;
}

const AddToCartBtn: React.FC<AddToCartBtnProps> = ({ className, product }) => {
  const [isInCart, setIsInCart] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const { cartItemCount, addToCart, removeFromCart } = useContext(CartContext); // use context here
  const { addToWishlist, isInWishlist, allwishlist, removeFromWishlist } =
    useWishlist();
  const [wishlistdataExist, setWishlistdata] = useState(false);

  useEffect(() => {
    const exist = isInWishlist(product.id);
    setWishlistdata(exist);
  }, [allwishlist.length]);

  useEffect(() => {
    const existingCart = JSON.parse(localStorage.getItem("cartItems") || "[]");
    const existingProduct = existingCart.find(
      (item: Products) => item.id === product.id
    );
    if (existingProduct) {
      setIsInCart(true);
      setQuantity(existingProduct.quantity);
    } else {
      setIsInCart(false);
      setQuantity(1);
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
          onRemove={handleRemoveFromCart}
        />
      ) : (
        // <Button
        //   onClick={handleAddToCart}
        //   className={`${className} self-end hover:bg-green-600 transition-all ease-linear flex items-center justify-center gap-2`}
        // >
        //   <BiCartDownload className="text-xl hidden sm:block" />
        //   Add to Cart
        // </Button>
        <span className="w-full relative gap-4 h-fit flex items-center justify-between ">
          <Button
            onClick={handleAddToCart}
            className="w-full relative py-1 px-3 rounded-lg bg-primary text-white hover:text-primary hover:bg-white border border-primary flex items-senter justify-center cursor-pointer"
          >
            Add to Cart
          </Button>
          {wishlistdataExist && (
            <span
              className={`w-fit relative h-fit rounded-full bg-heartbg p-2    `}
              onClick={() => removeFromWishlist(product.id)}
            >
              <IoHeartDislikeOutline
                className={`text-[24px]  cursor-pointer text-red-600 `}
              />
            </span>
          )}
          {!wishlistdataExist && (
            <span
              className={`w-fit relative h-fit rounded-full bg-heartbg p-2    `}
              onClick={() => addToWishlist(product)}
            >
              <CiHeart
                className={`text-[25px]  cursor-pointer ${
                  wishlistdataExist ? "text-red-700" : "text-black"
                } `}
              />
            </span>
          )}
        </span>
      )}
    </>
  );
};

export default AddToCartBtn;
