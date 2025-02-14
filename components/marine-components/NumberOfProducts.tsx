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

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    } else {
      onRemove();
    }
  };

  return (
    <div className="flex items-center h-auto w-full">
      <Button
        className="hover:bg-primary hover:opacity-90"
        onClick={handleDecrement}
      >
        -
      </Button>
      <span className="mx-2">{count}</span>
      <Button
        className="hover:bg-primary hover:opacity-90"
        onClick={handleIncrement}
      >
        +
      </Button>
      <Button
        onClick={onRemove}
        className="ml-2 hover:bg-primary hover:opacity-90"
      >
        Remove
      </Button>
    </div>
  );
};

export default NumberOfProducts;
