import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="border-t border-zinc-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="grid gap-10 md:grid-cols-4">
            {/* Logo */}
            <div>
              <h2 className="text-2xl font-bold">
                Smash<span className="text-emerald-500">-API</span>
              </h2>

              <p className="mt-4 text-sm leading-6 text-zinc-500">
                Publish, consume and manage APIs with a fast developer-first
                platform.
              </p>
            </div>

            {/* Product */}
            <div>
              <h3 className="font-semibold text-zinc-900">Product</h3>

              <ul className="mt-4 space-y-3 text-sm text-zinc-500">
                <li>
                  <a href="#">Browse APIs</a>
                </li>
                <li>
                  <a href="#">Publish API</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">Roadmap</a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-semibold text-zinc-900">Resources</h3>

              <ul className="mt-4 space-y-3 text-sm text-zinc-500">
                <li>
                  <a href="#">Documentation</a>
                </li>
                <li>
                  <a href="#">API Status</a>
                </li>
                <li>
                  <a href="#">Support</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>
            </div>

            {/* Community */}
            <div>
              <h3 className="font-semibold text-zinc-900">Community</h3>

              <ul className="mt-4 space-y-3 text-sm text-zinc-500">
                <li>
                  <a href="#">GitHub</a>
                </li>
                <li>
                  <a href="#">Discord</a>
                </li>
                <li>
                  <a href="#">Twitter</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-14 flex flex-col gap-4 border-t border-zinc-200 pt-6 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
            <p>© 2026 Smash API. All rights reserved.</p>

            <div className="flex gap-6">
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
