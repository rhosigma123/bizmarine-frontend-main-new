// HomeContext.ts (new file)
import { createContext } from "react";
import { HomePageData } from "@/types/interface";

export const HomeContext = createContext<HomePageData | null>(null);
