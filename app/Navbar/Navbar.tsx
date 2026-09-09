"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

interface NavLink {
  id: string;
  name: string;
  href: string;
}

const navlinks: NavLink[] = [
  { id: "1", name: "Home", href: "/" },
  { id: "2", name: "APIs", href: "/apis" },
  { id: "3", name: "Publish", href: "/Publish" },
  { id: "4", name: "Studio", href: "/Studio" },
];

export default function Navbar() {
  const [scrolled, setscrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setscrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
  className={`sticky top-0 z-50 grid grid-cols-3 items-center border-b border-slate-200/80 bg-white/90 backdrop-blur-xl transition-all duration-300 ${
    scrolled ? "px-8 py-2 shadow-sm" : "px-8 py-3"
  }`}
>
   <Link
    href={"/"}
    className={`cursor-pointer font-bold text-slate-900 transition-all duration-300 ${
      scrolled ? "text-xl" : "text-2xl"
    }`}
  >
    Smash<span className="text-blue-600">-API</span>
  </Link>

   <div className="flex justify-center gap-8">
    {navlinks.map((link) => (
      <Link
        key={link.id}
        href={link.href}
        className={`font-medium text-slate-600 transition-all duration-300 hover:text-blue-600 ${
          scrolled ? "text-sm" : "text-base"
        }`}
      >
        {link.name}
      </Link>
    ))}
  </div>

   <div className="flex justify-end gap-3">
    <Link
      href={"signin"}
      className={`rounded-full font-semibold text-slate-700 transition-all duration-300 hover:text-blue-600 ${
        scrolled ? "px-4 py-1.5 text-sm" : "px-4 py-2 text-base"
      }`}
    >
      Sign In
    </Link>

    <Link
      href={"signup"}
      className={`rounded-full bg-blue-600 font-semibold text-white transition-all duration-300 hover:bg-blue-700 ${
        scrolled ? "px-5 py-1.5 text-sm" : "px-5 py-2 text-base"
      }`}
    >
      Sign Up
    </Link>
  </div>
</nav>
  );
}
