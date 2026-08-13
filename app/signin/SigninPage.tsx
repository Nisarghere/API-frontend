"use client";

import Link from "next/link";
import AuthLayout from "../components/AuthLayout";

export default function SigninPage() {
  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Sign in to continue to your API workspace."
      bottomText="Don't have an account?"
      bottomLinkText="Sign up"
      bottomLinkHref="/signup"
    >
      <form className="space-y-4">
         <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Email
          </label>

          <input
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