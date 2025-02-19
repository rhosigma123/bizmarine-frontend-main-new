import CartContainer from "@/components/marine-components/Cart/CartContainer";
import { Metadata } from "next";
import React from "react";

import { mergeMetadata } from "../layout";
export const metadata = mergeMetadata ( {
  title: "Cart - Biz Marine | Your Marine Parts Shopping Cart",
  description: "Review the items in your cart at Biz Marine. Make changes and proceed to checkout for premium marine parts and accessories.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Cart - Biz Marine | Your Marine Parts Shopping Cart",
    description: "View and manage your shopping cart at Biz Marine. Complete your purchase of high-quality marine parts and accessories with ease.",
    url: "/cart",
    locale: "en_us",
    siteName: "Biz Marine",
  },
  alternates: {
    canonical: `/cart`,
  },
});


const Cart = () => {
  return (
    <div>
      <CartContainer />
      
    </div>
  );
};

export default Cart;
