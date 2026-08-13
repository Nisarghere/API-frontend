"use client";

import AuthLayout from "../components/AuthLayout";



export default function SignupPage() {
  return (
    <AuthLayout
      title="Create your account"
      subtitle="Build, publish, and consume APIs from one place."
      bottomText="Already have an account?"
      bottomLinkText="Sign in"
      bottomLinkHref="/signin"
    >
      <form className="space-y-4">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Full name
          </label>

          <input
            type="text"
            placeholder="John Doe"
            className="w-full h-11 rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-blue-500 focus:ring-3 focus:ring-blue-100"
          />
        </div>

        {/* Email */}
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

        {/* Password */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Password
          </label>

          <input
            type="password"
            placeholder="••••••••"
            className="w-full h-11 rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-blue-500 focus:ring-3 focus:ring-blue-100"
          />
        </div>

        {/* Confirm password */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Confirm password
          </label>

          <input
            type="password"
            placeholder="••••••••"
            className="w-full h-11 rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-blue-500 focus:ring-3 focus:ring-blue-100"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full h-11 mt-2 rounded-lg bg-blue-600 text-white text-sm font-medium transition hover:bg-blue-700 active:bg-blue-800"
        >
          Create account
        </button>
      </form>
    </AuthLayout>
  );
}