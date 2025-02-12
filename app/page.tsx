import Home from "@/components/marine-components/Home/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Biz Marine",
  description: "",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Biz Marine",
    description: "",
    url: "/",
    locale: "en_us",
    siteName: "BizMarine",
  },
  alternates: {
    canonical: `/`,
  },
};

const HomePage = () => {
  return (
    <>
      <Home />
    </>
  );
};

export default HomePage;
