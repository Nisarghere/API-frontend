"use client";

import Link from "next/link";
import AuthLayout from "../components/AuthLayout";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

interface SigninPayload {
  email: string,
  password:string
}

export default function SigninPage() {
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")


  async function HandleSignIn(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault();
  
      
  
      const payload: SigninPayload = {email, password}
      
      try {
        const response = await fetch("http://localhost:5000/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });
        const data = await response.json();
        console.log(data);
  
        if (response.ok) {
          toast("Login successful");
        } else {
          toast(data.message || "Login failed"); // show backend's actual error if it sends one
        }
      } catch (error) {
        console.log("something went wrong", error);
      }
    }

  
  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Sign in to continue to your API workspace."
      bottomText="Don't have an account?"
      bottomLinkText="Sign up"
      bottomLinkHref="/signup"
    >
      <ToastContainer/>
      <form onSubmit={HandleSignIn} className="space-y-4">
         <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Email
          </label>

          <input
          value={email}
          onChange={(e)=> setemail(e.target.value)}
            type="email"
            placeholder="you@example.com"
            className="w-full h-11 rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-blue-500 focus:ring-3 focus:ring-blue-100"
          />
        </div>

         <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="text-sm font-medium text-slate-700">
              Password
            </label>

            <Link
              href="/forgot-password"
              className="text-xs font-medium text-blue-600 hover:text-blue-700"
            >
              Forgot password?
            </Link>
          </div>

          <input
           value={password}
          onChange={(e)=> setpassword(e.target.value)}
            type="password"
            placeholder="••••••••"
            className="w-full h-11 rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-blue-500 focus:ring-3 focus:ring-blue-100"
          />
        </div>

         <button
          type="submit"
          className="w-full h-11 mt-2 rounded-lg bg-blue-600 text-white text-sm font-medium transition hover:bg-blue-700 active:bg-blue-800"
        >
          Sign in
        </button>
      </form>
    </AuthLayout>
  );
}