'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

// Define types for the wishlist item
interface WishlistItem {
  id: number;
  name: string;
  // Add other product properties if needed
}

// Define the context type
interface WishlistContextType {
  allwishlist: WishlistItem[];
  addToWishlist: (item: WishlistItem) => void;
  removeFromWishlist: (id: number) => void;
  isInWishlist: (id: number) => boolean;
}

// Create the context with the correct type, initially undefined
const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

// Custom hook to use the WishlistContext
export const useWishlist = (): WishlistContextType => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
};

// Provider component
export const WishlistProvider = ({ children }: { children: ReactNode }) => {
  // Initialize state from local storage
  const [allwishlist, setWishlist] = useState<WishlistItem[]>(() => {
    if (typeof window !== "undefined") {
      const storedWishlist = localStorage.getItem("wishlist");
      return storedWishlist ? JSON.parse(storedWishlist) : [];
    }
    return [];
  });

  // Function to add an item to the wishlist
  const addToWishlist = (item: WishlistItem) => {
    setWishlist((prevWishlist) => {
      const updatedWishlist = [...prevWishlist, item];
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist)); // Update local storage
      return updatedWishlist;
    });
  };

  // Function to remove an item from the wishlist
  const removeFromWishlist = (id: number) => {
    setWishlist((prevWishlist) => {
      const updatedWishlist = prevWishlist.filter((item) => item.id !== id);
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist)); // Update local storage
      return updatedWishlist;
    });
  };

  // Function to check if an item is in the wishlist
  const isInWishlist = (id: number) => {
    return allwishlist.some((item) => item.id === id);
  };

  // Sync state with local storage on component mount
  useEffect(() => {
    const storedWishlist = localStorage.getItem("wishlist");
    if (storedWishlist) {
      setWishlist(JSON.parse(storedWishlist));
    }
  }, []);

  return (
    <WishlistContext.Provider value={{ allwishlist, addToWishlist, removeFromWishlist, isInWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};
