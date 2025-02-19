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
import { WishlistProvider } from "./Context/WishlistContext";

const notoSans = Noto_Sans({
  subsets: ["latin"], // Add subsets as needed
  weight: ["400", "700"], // Specify required font weights
});

export const metadata: Metadata = {
  title: "Biz Marine",
  description:
    "Biz Marine offers high-quality marine parts and accessories. Explore our wide selection of reliable products for all your maritime needs.",
  metadataBase: new URL("https://bizmarine.com"),
  twitter: {
    card: "summary_large_image",
    images: "/opengraph-image.webp",
    site: "@bizmarine",
  },
  openGraph: {
    title: "Biz Marine | Premium Marine Parts",
    description:
      "Discover premium marine parts and accessories at Biz Marine. Your trusted source for high-quality maritime components.",
    url: "https://bizmarine.com",
    locale: "en_us",
    siteName: "Biz Marine",
    images: "/opengraph-image.webp",
  },
};

export function mergeMetadata(pageMetadata: Metadata): Metadata {
  return {
    ...metadata, // Use global metadata as the base
    ...pageMetadata, // Merge with page-specific metadata
    openGraph: {
      ...metadata.openGraph,
      ...pageMetadata.openGraph,
      images: metadata.openGraph?.images, // Always use global Open Graph images
    },
    twitter: {
      ...metadata.twitter,
      ...pageMetadata.twitter,
      images: metadata.twitter?.images, // Always use global Twitter images
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={notoSans.className}>
        <WishlistProvider>
          <CartProvider>
            <RootProvider>
              {/* <NextTopLoader
              showSpinner={false}
              height={4}
              color="#2e9e9e"
              zIndex={1600}
            /> */}
              <NavbarTop />
              <Navbar />
              <NavigationMenu className="hidden" />
              {children}
              <CallToAction />
              <Footer />
            </RootProvider>
          </CartProvider>
        </WishlistProvider>
      </body>
    </html>
  );
}
