import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineDeleteForever } from "react-icons/md";
import { BASE_URL } from "@/config/config";

interface CartItem {
  id: number;
  name: string;
  image: string;
  quantity: number;
  description: string;
}

const CartCard: React.FC<{
  item: CartItem;
  onDelete: (id: number) => void;
}> = ({ item, onDelete }) => {
  const [quantity, setQuantity] = useState<number>(item.quantity);

  useEffect(() => {
    // Update localStorage whenever the quantity changes
    const existingCart = JSON.parse(localStorage.getItem("cartItems") || "[]");
    const productIndex = existingCart.findIndex(
      (cartItem: CartItem) => cartItem.id === item.id
    );

    if (productIndex !== -1) {
      existingCart[productIndex].quantity = quantity;
      localStorage.setItem("cartItems", JSON.stringify(existingCart));
    }
  }, [quantity, item.id]);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = Math.max(1, Number(e.target.value));
    setQuantity(newQuantity);
  };

  const handleDelete = () => {
    onDelete(item.id); // Call parent-provided delete handler
  };

  return (
    <div className="grid gap-5 grid-cols-[100px_.5fr_1fr_.5fr_50px] border justify-items-center justify-between p-2 items-center rounded-xl">
      <Image
        src={`${BASE_URL}${item.image || ""}`}
        height={100}
        width={100}
        alt="Product Image"
        className="w-[80px] h-[80px] object-cover border rounded-md"
      />
      <Link
        href={`/products/${item.id}`}
        className="underline text-primary font-bold line-clamp-3 text-base"
      >
        {item.name}
      </Link>
      <p className="text-secondary-foreground/75 line-clamp-2 text-base">
        {item.description}
      </p>
      <span className="flex gap-2 text-sm items-center">
        <strong>QTY:</strong>
        <input
          className="bg-secondary p-1 rounded-md w-[100px] border"
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
          min={1}
        />
      </span>
      <MdOutlineDeleteForever
        className="cursor-pointer text-destructive text-2xl"
        onClick={handleDelete}
      />
    </div>
  );
};

export default CartCard;
