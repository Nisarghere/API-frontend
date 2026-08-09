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
  { id: "3", name: "Docs", href: "/docs" },
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
      className={`sticky top-0 z-50 grid grid-cols-3 items-center border-b border-transparent bg-white/90 backdrop-blur-xl transition-all duration-300 ${
        scrolled ? "px-8 py-2 shadow-md" : "px-8 py-3"
      }`}
    >
      {/* Logo */}
      <h2
        className={`font-bold text-emerald-800 transition-all duration-300 ${
          scrolled ? "text-xl" : "text-2xl"
        }`}
      >
        Smash<span className="text-emerald-400">-API</span>
      </h2>

      {/* Nav links */}
      <div className="flex justify-center gap-8">
        {navlinks.map((link) => (
          <Link
            key={link.id}
            href={link.href}
            className={`font-medium text-slate-600 hover:text-emerald-500 transition-all duration-300 ${
              scrolled ? "text-sm" : "text-base"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-3">
        <button
          className={`rounded-full font-semibold transition-all duration-300 ${
            scrolled ? "px-4 py-1.5 text-sm" : "px-4 py-2 text-base"
          }`}
        >
          Sign In
        </button>

        <button
          className={`rounded-full bg-emerald-400 font-bold text-slate-900 transition-all duration-300 hover:bg-emerald-300 ${
            scrolled ? "px-5 py-1.5 text-sm" : "px-5 py-2 text-base"
          }`}
        >
          Sign Up
        </button>
      </div>
    </nav>
  );
}
