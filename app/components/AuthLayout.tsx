import Link from "next/link";
import { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  subtitle: string;
  bottomText: string;
  bottomLinkText: string;
  bottomLinkHref: string;
}

export default function AuthLayout({
  children,
  title,
  subtitle,
  bottomText,
  bottomLinkText,
  bottomLinkHref,
}: AuthLayoutProps) {
  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-[420px]">
        {/* Logo */}
        <Link href="/" className="flex items-center justify-center gap-2 mb-8">
          <div className="h-9 w-9 rounded-lg bg-blue-600 flex items-center justify-center">
            <span className="text-white font-bold text-lg">A</span>
          </div>

          <span className="text-xl font-semibold text-slate-900">
            API Gateway
          </span>
        </Link>

        {/* Card */}
        <div className="bg-white border border-slate-200 rounded-2xl px-7 py-8 shadow-sm">
          <div className="text-center mb-7">
            <h1 className="text-2xl font-semibold text-slate-900">{title}</h1>

            <p className="text-sm text-slate-500 mt-2">{subtitle}</p>
          </div>

          {children}
        </div>

        {/* Bottom link */}
        <p className="text-center text-sm text-slate-500 mt-6">
          {bottomText}{" "}
          <Link
            href={bottomLinkHref}
            className="font-medium text-blue-600 hover:text-blue-700"
          >
            {bottomLinkText}
          </Link>
        </p>
      </div>
    </main>
  );
}
