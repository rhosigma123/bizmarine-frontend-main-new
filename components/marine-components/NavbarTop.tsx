import Link from "next/link";
import React from "react";

const navLinks = [
  { id: "2", link: "/wishilsts", name: "Wishlists" },
  { id: "3", link: "", name: "Track Your Order" },
];

const NavbarTop = () => {
  return (
    <section className="hidden lg:block bg-secondary border-b border-[#343434] py-2 ">
      <div className="container flex gap-5 flex-wrap justify-between">
        <ul className="flex items-center gap-5">
          {navLinks.map((item) => (
            <li key={item.id}>
              <Link
                className="text-[#f5f5f5] font-extralight uppercase text-sm"
                href={item.link}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <span className="text-sm text-[#f5f5f5] font-extralight uppercase flex items-center gap-2">
          Customer Service:<Link href={"tel:+91 98765 43210"} className=" text-white font-medium "> +91 98765 43210</Link>
        </span>
      </div>
    </section>
  );
};

export default NavbarTop;
