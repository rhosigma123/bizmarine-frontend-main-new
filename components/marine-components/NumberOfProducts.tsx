"use client";
import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";

interface Product {
  id: number;
  name: string;
}

interface NumberOfProductsProps {
  product: Product;
  initialQuantity: number;
  updateQuantity: (quantity: number) => void;
  onRemove: () => void;
}

const NumberOfProducts: React.FC<NumberOfProductsProps> = ({
  product,
  initialQuantity,
  updateQuantity,
  onRemove,
}) => {
  const [count, setCount] = useState(initialQuantity);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setCount(Number(value));
    console.log("Selected value:", value);
  };

  useEffect(() => {
    updateQuantity(count);
    const existingCart = JSON.parse(localStorage.getItem("cartItems") || "[]");
    const productIndex = existingCart.findIndex(
      (item: any) => item.id === product.id
    );
    if (productIndex !== -1) {
      existingCart[productIndex].quantity = count;
      localStorage.setItem("cartItems", JSON.stringify(existingCart));
    }
  }, [count, product.id, updateQuantity]);

  return (
    <div className="flex items-center md:gap-2  h-auto w-full">
      {/* <Button
        className=" hidden sm:block hover:bg-primary hover:opacity-90"
        onClick={handleDecrement}
      >
        -
      </Button>
      <span className=" hidden sm:block mx-2">{count}</span>
      <Button
        className=" hidden sm:block hover:bg-primary hover:opacity-90"
        onClick={handleIncrement}
      >
        +
      </Button> */}

      <select
        name="cars"
        onChange={handleChange}
        value={count}
        className=" px-2 md:px-3 mr-1 md:mr-3  block  border  relative text-secondary py-1 "
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>

      <Button
        onClick={onRemove}
        className=" w-full  hover:bg-primary hover:opacity-90"
      >
        Remove
      </Button>
    </div>
  );
};

export default NumberOfProducts;
