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
  price?:string
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
    <div className="grid gap-2 md:gap-5 items-start grid-cols-1 w-full sm:grid-cols-[100px_2.2fr_1fr_1fr]  lg:grid-cols-[100px_2.2fr_1fr_1.2fr_1.2fr] border  justify-items-start md:justify-items-center justify-start  md:justify-between p-2 md:items-center rounded-xl">
      <Image
        src={`${BASE_URL}${item.image || ""}`}
        height={100}
        width={100}
        alt="Product Image"
        className=" w-full  sm:w-[80px] h-[120px] sm:h-[80px] object-cover border rounded-md"
      />
      <Link
        href={`/products/${`${item.name}`.split(" ").join("-").toLocaleLowerCase()}`}
        className=" sm:underline text-primary font-bold line-clamp-2 text-base"
      >
        {item.name}
      </Link>
      <p className="  font-bold line-clamp-3 text-base text-primary">
        {item.price}
      </p>
      <span className="flex gap-2 text-sm items-center">
        <strong>QTY:</strong>
        <input
          className="bg-white  text-secondary p-1 rounded-md w-[50px] border"
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
          min={1}
        />
        <MdOutlineDeleteForever
        className="cursor-pointer text-destructive text-2xl"
        onClick={handleDelete}
      />
      </span>

      <p className=" lg:flex  hidden   font-bold line-clamp-3 text-base text-primary">
        { (quantity * Number(item?.price)) || ""}
      </p>
      
    </div>
  );
};

export default CartCard;
