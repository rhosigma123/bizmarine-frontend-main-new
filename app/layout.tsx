import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/marine-components/Navbar";
import NavbarTop from "@/components/marine-components/NavbarTop";
import NavigationMenu from "@/components/marine-components/NavigationMenu";
import Footer from "@/components/marine-components/Footer";
import NewsLetterSection from "@/components/marine-components/Newsletter/NewsLetterSection";
import CallToAction from "@/components/marine-components/CallToAction/CallToAction";
import NextTopLoader from "nextjs-toploader";
import { RootProvider } from "./Context/RootContext";
import { CartProvider } from "./Context/CartContext";

const notoSans = Noto_Sans({
  subsets: ["latin"], // Add subsets as needed
  weight: ["400", "700"], // Specify required font weights
});
export const metadata: Metadata = {
  title: "Biz Marine",
  description: "",
  metadataBase: new URL("https://bizmarine.com"),
  twitter: {
    card: "summary_large_image",
    images: "/opengraph-image.webp",
    site: "@bizmarine",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={notoSans.className}>
        <CartProvider>
          <RootProvider>
            <NextTopLoader
              showSpinner={false}
              height={4}
              color="#2e9e9e"
              zIndex={1600}
            />
            <NavbarTop />
            <Navbar />
            <NavigationMenu className="hidden" />
            {children}
            <CallToAction />
            <NewsLetterSection />
            <Footer />
          </RootProvider>
        </CartProvider>
      </body>
    </html>
  );
}
