import React from "react";

const Footer = () => {
  return (
    
<div>
  <footer className="border-t border-slate-200 bg-slate-50/70">
    <div className="mx-auto max-w-7xl px-6 py-14">
      <div className="grid gap-10 md:grid-cols-4">
        {/* Logo */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            Smash<span className="text-blue-600">-API</span>
          </h2>

          <p className="mt-4 max-w-xs text-sm leading-6 text-slate-500">
            Publish, consume and manage APIs with a fast developer-first
            platform.
          </p>
        </div>

        {/* Product */}
        <div>
          <h3 className="font-semibold text-slate-900">Product</h3>

          <ul className="mt-4 space-y-3 text-sm text-slate-500">
            <li>
              <a href="#" className="transition-colors hover:text-blue-600">
                Browse APIs
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-blue-600">
                Publish API
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-blue-600">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-blue-600">
                Roadmap
              </a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold text-slate-900">Resources</h3>

          <ul className="mt-4 space-y-3 text-sm text-slate-500">
            <li>
              <a href="#" className="transition-colors hover:text-blue-600">
                Documentation
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-blue-600">
                API Status
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-blue-600">
                Support
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-blue-600">
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Community */}
        <div>
          <h3 className="font-semibold text-slate-900">Community</h3>

          <ul className="mt-4 space-y-3 text-sm text-slate-500">
            <li>
              <a href="#" className="transition-colors hover:text-blue-600">
                GitHub
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-blue-600">
                Discord
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-blue-600">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-blue-600">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-14 flex flex-col gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
        <p>© 2026 Smash API. All rights reserved.</p>

        <div className="flex gap-6">
          <a href="#" className="transition-colors hover:text-blue-600">
            Privacy
          </a>
          <a href="#" className="transition-colors hover:text-blue-600">
            Terms
          </a>
          <a href="#" className="transition-colors hover:text-blue-600">
            Cookies
          </a>
        </div>
      </div>
    </div>
  </footer>
</div>


  );
};

export default Footer;
