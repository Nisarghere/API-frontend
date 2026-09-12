"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { apiFetch } from "../lib/apiFetch";
import { useRouter } from "next/navigation";


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
  const [isLoggedIn, setisLoggedIn] = useState(false);

  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setscrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    async function checkAuth() {
      try {
        const response = await apiFetch("http://localhost:5000/auth/me", {
          method: "GET",
        });

        if (response.success) {
          setisLoggedIn(true);
        }
      } catch (err) {
        console.log(err);
        setisLoggedIn(false);
      }
    }
    checkAuth();
  }, []);

  async function handleLogout() {
    const response = await apiFetch("http://localhost:5000/auth/logout",{
      method:"POST"
     })
     if (response.success){
      router.push('/')
      router.refresh()
     }
  }
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
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className={`rounded-full bg-red-500 font-semibold cursor-pointer text-white transition-all duration-300 hover:bg-red-700 ${
              scrolled ? "px-5 py-1.5 text-sm" : "px-5 py-2 text-base"
            }`}
          >
            Log-Out
          </button>
        ) : (
          <>
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
          </>
        )}
      </div>
    </nav>
  );
}
